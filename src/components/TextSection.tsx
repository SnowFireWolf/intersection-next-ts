import { styled } from '@linaria/react';



const TextLayout = styled.div`
  position: absolute;
  width: 100%;
  height: 1024px;
  z-index: 100;

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
  line-height: 65px;
  text-align: center;

  /* @media screen and (min-width: 1440px) {
    font-size: 48px;
  } */
`;



export default function TextSection() {
  return (
    <TextLayout>
      <Title>
        Creating perfect
        lines and imposing
        presence
      </Title>
    </TextLayout>
  );
}
