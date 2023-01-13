import { useState, useEffect } from 'react';
import { styled } from '@linaria/react';
import request from '@/utils/request';



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

  @media screen and (min-width: 1024px) {
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

  @media screen and (min-width: 1024px) {
    & video {
      position: absolute;
      min-width: 100%;
    }
  }
`;



export default function VideoSection() {
  const [videoSrc, setVideoSrc] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const response = await request('/api/video');
        // console.log('response', response);

        if (response.status === 200) {
          const data = response.data;
          // console.log('data', data);
          setVideoSrc(data.src);
        } else {
          console.error('get video failed');
        }
      } catch (error) {
        console.error('[request video error] ', error);
      }
    })();
  }, []);

  return (
    <VideoContainer>
      {
        videoSrc === '' ? (
          <VideoLoadingSkeleton />
        ) : (
          <VideoBanner>
            <video
              // preload
              muted
              loop
              playsInline
              autoPlay
              poster='/assets/bannerPlaceholder.png'
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </VideoBanner>
        )
      }
    </VideoContainer>
  );
}
