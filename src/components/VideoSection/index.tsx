import { useRef, useState, useEffect } from 'react';
import { styled } from '@linaria/react';
import request from '@/utils/request';
import { initCacheDB } from '@/utils/cacheDB';

import { timestamp, getVideoURL, getVideoAndReturnBlob } from './utils';



const VideoContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const VideoLoadingSkeleton = styled.div`
  width: 100%;
  height: 737px;

  background-image: url("/assets/bannerPlaceholder.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media screen and (min-width: 1440px) {
    height: 812px;
  }
`;

const VideoBanner = styled.div`
  width: 100%;
  height: 100%;
  min-height: 737px;
  max-height: 812px;

  overflow: hidden;
  position: relative;

  display: flex;
  justify-content: center;

  & video {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* object-position: 50% center; */
  }
`;



export default function VideoSection() {
  const videoBannerRef = useRef<HTMLDivElement>(null);

  // cache system
  useEffect(() => {
    let newObjectURL = '';

    (async () => {
      const { db, idbCache } = await initCacheDB();

      // video banner ref
      if (videoBannerRef.current !== null) {
        const videoBannerElement = videoBannerRef.current;
        const videoElement = videoBannerElement.children[0] as HTMLVideoElement;

        const cacheVideo: {
          data: Blob | null,
          maxAge: number;
        } = await idbCache.get('bannerVideo');

        if (cacheVideo !== undefined && cacheVideo.data !== null) {
          // max age check
          if (cacheVideo.maxAge > (timestamp() / 1000)) {
            console.log(`we won't reload video data`);

            const videoBlob = cacheVideo.data;
            newObjectURL = URL.createObjectURL(videoBlob);
            videoElement.src = newObjectURL;

          } else {
            console.log(`we will reload video data`);

            const videoSrc = await getVideoURL();
            const videoBlob = await getVideoAndReturnBlob(videoSrc);
  
            newObjectURL = URL.createObjectURL(videoBlob);
            videoElement.src = newObjectURL;

            await idbCache.set('bannerVideo', {
              data: videoBlob,
              maxAge: (timestamp() / 1000) + 3600,
            });
          }
        } else {
          const videoSrc = await getVideoURL();
          const videoBlob = await getVideoAndReturnBlob(videoSrc);

          newObjectURL = URL.createObjectURL(videoBlob);
          videoElement.src = newObjectURL;

          await idbCache.set('bannerVideo', {
            data: videoBlob,
            maxAge: (timestamp() / 1000) + 3600,
          });
        }
      }
    })();

    return () => {
      // delete memory cache
      URL.revokeObjectURL(newObjectURL);
    }
  }, []);

  return (
    <VideoContainer>
      <VideoBanner ref={videoBannerRef}>
        <video
          // preload
          muted
          loop
          playsInline
          autoPlay
          poster='/assets/bannerPlaceholder.png'
        // src={videoData.src}
        >
          {/* <source src={videoSrc} type="video/mp4" /> */}
          Your browser does not support the video tag.
        </video>
      </VideoBanner>
    </VideoContainer>
  );
}
