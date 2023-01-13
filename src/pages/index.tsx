import Head from 'next/head'
import Image from 'next/image'

import { useState, useEffect } from 'react';
import { styled } from '@linaria/react';
import request from '@/utils/request';



const Wrapper = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

const VideoContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const VideoLoadingSkeleton = styled.div`
  width: 100%;
  /* height: 100%; */
  /* max-height: 737px; */
  height: 737px;

  background-image: url("/assets/bannerPlaceholder.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const VideoBanner = styled.div`
  width: 100%;
  height: 100%;
  max-height: 737px;
  overflow-y: hidden;

  position: relative;
`;



const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 1440px;
  height: 100%;
  min-height: 1024px;
  padding-bottom: 89px;
`;

const TextLayout = styled.div`
  position: absolute;
  width: 100%;
  height: 1024px;
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-family: 'Noto Serif';
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 65px;
  text-align: center;
`;

const ImageLayout = styled.div`
  width: 100%;
`;

const ImageBox = styled.div`
  position: absolute;
  background-color: #aaaaaa;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  &.i-1 {
    background-image: url("/assets/1.png");

    width: 332px;
    height: 259px;

    top: 43px;
    left: 472px;
  }

  &.i-2 {
    background-image: url("/assets/2.png");

    width: 172px;
    height: 132px;

    top: 150px;
    left: 995px;
  }

  &.i-3 {
    background-image: url("/assets/3.png");

    width: 231px;
    height: 184px;
    left: 50px;
    top: 210px;
  }

  &.i-4 {
    background-image: url("/assets/4.png");

    width: 200px;
    height: 210px;
    left: 1258px;
    top: 440px;
  }

  &.i-5 {
    background-image: url("/assets/5.png");

    width: 413px;
    height: 290px;
    left: 0px;
    top: 500px;
  }

  &.i-6 {
    background-image: url("/assets/6.png");

    width: 355px;
    height: 285px;
    left: 903px;
    top: 650px;
  }
`;



export default function HomePage() {
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
    <>
      <Head>
        <title>Intersection view</title>
        <meta name="description" content="Intersection view" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Wrapper>
          <VideoContainer>
            {
              videoSrc === '' ? (
                <VideoLoadingSkeleton />
              ) : (
                <VideoBanner>
                  <video width="100%" height="100%" controls>
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </VideoBanner>
              )
            }
          </VideoContainer>

          <Container>
            <TextLayout>
              <Title>
                Creating perfect
                lines and imposing
                presence
              </Title>
            </TextLayout>

            <ImageLayout>
              <ImageBox className="i-1" />
              <ImageBox className="i-2" />
              <ImageBox className="i-3" />
              <ImageBox className="i-4" />
              <ImageBox className="i-5" />
              <ImageBox className="i-6" />
            </ImageLayout>
          </Container>
        </Wrapper>
      </main>
    </>
  );
}
