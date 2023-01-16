import { useRef, useEffect } from 'react';
import { styled } from '@linaria/react';

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

  // cache system and video view
  useEffect(() => {
    let newObjectURL = '';
    let bannerObserve: IntersectionObserver | null = null;

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

        let videoBlob: Blob;

        if (cacheVideo !== undefined && cacheVideo.data !== null) {
          // max age check
          if (cacheVideo.maxAge > (timestamp() / 1000)) {
            // console.log(`we won't reload video data`);
            videoBlob = cacheVideo.data;
          } else {
            // console.log(`we will reload video data`);
            const videoSrc = await getVideoURL();
            videoBlob = await getVideoAndReturnBlob(videoSrc);

            idbCache.set('bannerVideo', {
              data: videoBlob,
              maxAge: (timestamp() / 1000) + 3600,
            });
          }
        } else {
          const videoSrc = await getVideoURL();
          videoBlob = await getVideoAndReturnBlob(videoSrc);

          idbCache.set('bannerVideo', {
            data: videoBlob,
            maxAge: (timestamp() / 1000) + 3600,
          });
        }

        // blob blob sec
        newObjectURL = URL.createObjectURL(videoBlob);
        videoElement.src = newObjectURL;

        // intersection observer
        bannerObserve = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // console.log('viewport');
              videoElement.play();
            } else {
              // console.log('not viewport');
              videoElement.pause();
            }
          });
        });

        bannerObserve.observe(videoBannerElement);
      }
    })();

    return () => {
      // delete memory cache
      URL.revokeObjectURL(newObjectURL);

      // disconnect all observe
      bannerObserve !== null && bannerObserve.disconnect();
    }
  }, []);

  return (
    <VideoContainer>
      <VideoBanner ref={videoBannerRef}>
        <video
          muted
          loop
          playsInline
          autoPlay
          poster='/assets/bannerPlaceholder.png'
        // src={videoData.src}
        >
          Your browser does not support the video tag.
        </video>
      </VideoBanner>
    </VideoContainer>
  );
}
