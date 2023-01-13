import { styled } from '@linaria/react';



const ImageWrapper = styled.div`
  width: 100%;
  height: 1024px;
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
  transform: translateY(0%);
  transition: transform ease 480ms,
  max-width ease 480ms;

  @media screen and (min-width: 1024px) {
    max-width: 100%;
  }
`;

const ImageBox = styled.div`
  position: absolute;
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



export default function ImageSection() {
  return (
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
  );
}
