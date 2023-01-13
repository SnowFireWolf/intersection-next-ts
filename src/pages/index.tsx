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
  max-width: 375px;
  font-family: 'Noto Serif';
  font-style: normal;
  font-weight: 400;
  /* font-size: 32px; */
  font-size: clamp(32px, 5vw, 48px);
  /* font-size: max(32px, min(3.75vw, 48px)); */
  line-height: 65px;
  text-align: center;

  @media screen and (min-width: 1024px) {
    /* font-size: 48px; */
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 1024px;
  /* position: relative; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: all ease 500ms;
`;

const ImageLayout = styled.div`
  width: 100%;
  max-width: 375px;
  height: 1024px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 1024px) {
    /* max-width: 100%; */
  }
`;

const ImageBox = styled.div`
  position: relative;
  background-color: #aaaaaa;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  transition: all ease 480ms;

  &.i-1 {
    background-image: url("/assets/1.png");

    width: 152px;
    height: 112px;
    left: 36px;
    top: 36px;

    @media screen and (min-width: 1024px) {
      width: 332px;
      height: 259px;
      top: 43px;
      left: 472px;
    }
  }

  &.i-2 {
    background-image: url("/assets/2.png");
    width: 81px;
    height: 66px;
    left: 263px;
    top: 205px;

    @media screen and (min-width: 1024px) {
      width: 172px;
      height: 132px;
      left: 995px;
      top: 150px;
    }
  }

  &.i-3 {
    background-image: url("/assets/3.png");
    width: 128px;
    height: 99px;
    left: 0px;
    top: 221px;
    /* top: calc(221px - (36px + 112px)); */

    @media screen and (min-width: 1024px) {
      width: 231px;
      height: 184px;
      left: 50px;
      top: 210px;
    }
  }

  &.i-4 {
    background-image: url("/assets/4.png");

    width: 126px;
    height: 132px;
    left: 345px;
    top: 271px;

    @media screen and (min-width: 1024px) {
      width: 200px;
      height: 210px;
      left: 1258px;
      top: 440px;
    }
  }

  &.i-5 {
    background-image: url("/assets/5.png");

    width: 207px;
    height: 175px;
    left: -155px;
    top: 496px;

    @media screen and (min-width: 1024px) {
      width: 413px;
      height: 290px;
      left: 0px;
      top: 500px;
    }
  }

  &.i-6 {
    background-image: url("/assets/6.png");

    width: 215px;
    height: 162px;
    left: 160px;
    top: 584px;

    @media screen and (min-width: 1024px) {
      width: 355px;
      height: 285px;
      left: 903px;
      top: 650px;
    }
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
                  <video
                    width="100%"
                    height="100%"
                    preload="true"
                    muted
                    loop
                    playsInline
                    autoPlay
                  >
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

            <ImageWrapper>
              <ImageLayout>
                <ImageBox className="i-1" />
                <ImageBox className="i-2" />
                <ImageBox className="i-3" />
                <ImageBox className="i-4" />
                <ImageBox className="i-5" />
                <ImageBox className="i-6" />
              </ImageLayout>
            </ImageWrapper>
          </Container>
        </Wrapper>
      </main>
    </>
  );
}
