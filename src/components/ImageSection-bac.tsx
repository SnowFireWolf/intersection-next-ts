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
  transform: translateX(0%);
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
  transition: left ease 480ms, top ease 480ms;

  --size_view_calc: (10 * 10vw / 2);

  width: min(max(var(--size_view_calc), var(--min-width)), var(--max-width));
  height: min(max(var(--size_view_calc), var(--min-height)), var(--max-height));

  top: var(--min-top);
  left: var(--max-top);

  @media screen and (min-width: 1024px) {
    top: var(--max-top);
    left: var(--max-left);
  }

  &.i-1 {
    background-image: url("/assets/1.png");

    --min-width: 152px;
    --max-width: 332px;
    --min-height: 112px;
    --max-height: 259px;

    --min-top: 36px;
    --max-top: 43px;
    --min-left: 36px;
    --max-left: 472px;
  }

  &.i-2 {
    background-image: url("/assets/2.png");

    --min-width: 81px;
    --max-width: 172px;
    --min-height: 66px;
    --max-height: 132px;

    --min-top: 205px;
    --max-top: 150px;
    --min-left: 263px;
    --max-left: 995px;
  }

  &.i-3 {
    background-image: url("/assets/3.png");

    --min-width: 128px;
    --max-width: 231px;
    --min-height: 99px;
    --max-height: 184px;

    --min-top: 221px;
    --max-top: 210px;
    --min-left: 0px;
    --max-left: 50px;
  }

  &.i-4 {
    background-image: url("/assets/4.png");

    width: min(max(var(--size_view_calc), 128px), 231px);
    height: min(max(var(--size_view_calc), 128px), 231px);
    left: 345px;
    top: 271px;

    @media screen and (min-width: 1024px) {
      left: 1258px;
      top: 440px;
    }
  }

  &.i-5 {
    background-image: url("/assets/5.png");

    width:  min(max(var(--size_view_calc), 128px), 231px);
    height:  min(max(var(--size_view_calc), 128px), 231px);
    left: -155px;
    top: 496px;

    @media screen and (min-width: 1024px) {
      left: 0px;
      top: 500px;
    }
  }

  &.i-6 {
    background-image: url("/assets/6.png");

    width:  min(max(var(--size_view_calc), 128px), 231px);
    height:  min(max(var(--size_view_calc), 128px), 231px);
    left: 160px;
    top: 584px;

    @media screen and (min-width: 1024px) {
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
