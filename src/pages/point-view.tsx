import Head from 'next/head'

import { styled } from '@linaria/react';

import VideoSection from '@/components/VideoSection';
import TextSection from '@/components/TextSection';
import ImageSection from '@/components/ImageSection';



const Wrapper = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 1440px;
  height: 100%;
  min-height: 1024px;
  padding-bottom: 89px;
`;



export default function HomePage() {
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
          <VideoSection />

          <Container>
            <TextSection />

            <ImageSection />
          </Container>
        </Wrapper>
      </main>
    </>
  );
}
