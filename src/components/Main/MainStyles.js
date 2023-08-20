import styled from "styled-components";

export const MainContainer = styled.div`
  background: var(--bg-dark);
  padding-top: 5.62rem;
  padding-bottom: 4.31rem;
  display: flex;
  justify-content: center;
  position: relative;

  @media screen and (max-width: 480px) {
    align-items: center;
    padding-top: 2.5rem;
    padding-bottom: 3.69rem;
    padding-left: 0.94rem;
    background-image: url(${(props) => props.imageUrl});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 100%;
  }
`;

export const MainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 71.25rem;

  @media screen and (max-width: 480px) {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const LeftSide = styled.div``;
export const Heading1 = styled.h1`
  font-size: 3rem;
  width: 22.6rem;

  @media screen and (max-width: 480px) {
    font-size: 2.25rem;
    width: 17rem;
  }
`;
export const Heading2 = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  background-image: linear-gradient(90deg, #fcb045 1.9%, #ff3f78 99%);
  background-size: 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  @media screen and (max-width: 480px) {
    font-size: 2.25rem;
  }
`;
export const Subtitle = styled.p`
  font-family: var(--secondary-font);
  font-size: 1.125rem;
  width: 17.1rem;
  margin-top: 1.87rem;

  @media screen and (max-width: 480px) {
    margin-top: 0.94rem;
    margin-bottom: 2.81rem;
  }
`;
export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-top: 1rem;
  position: relative;

  @media screen and (max-width: 480px) {
    align-items: flex-start;
  }
`;
export const Title = styled.h2`
  margin-bottom: 2.5rem;
  width: 18.18rem;
  text-align: right;
  font-size: 1.125rem;
  @media screen and (max-width: 480px) {
    text-align: left;
  }
`;
export const Span = styled.span`
  background: linear-gradient(90deg, #fcb045 36.99%, #fd1d1d 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.9px;
  text-transform: uppercase;

  @media screen and (max-width: 480px) {
    text-transform: lowercase;
    font-size: 1.125rem;
    letter-spacing: 0px;
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.88rem;
  margin-bottom: 3.81rem;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;
export const OptionsWrapper = styled.div`
  display: flex;
`;
export const OptionsItem = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 9.8rem;
  text-align: right;
`;
export const OptionTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 0.32rem;
`;
export const OptionDescr = styled.p`
  font-family: var(--secondary-font);
  font-size: 1rem;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const MobileOptions = styled.div`
  display: none;

  @media screen and (max-width: 480px) {
    display: flex;
    gap: 0.63rem;
  }
`
export const MobOptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.88rem;
`
export const MobOptionTitle = styled.p`
  text-transform: uppercase;
  display: flex;
  align-items: center;
  font-size: 0.8125rem;
font-weight: 400;
line-height: normal;
letter-spacing: 0.04063rem;

`
export const Line = styled.div`
  width: 0.625rem;
  height: 0.0625rem;
  background: linear-gradient(90deg, #FCB045 36.99%, #FD1D1D 100%);
  margin-right: 0.61rem;
`

export const Button = styled.button`
  padding: 1.31rem 2.12rem 1.31rem 2.19rem;
  background: #4077f3;
  font-weight: 500;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const RedBall = styled.div`
  width: 1.75rem;
  height: 1.75rem;
  flex-shrink: 0;
  background-image: radial-gradient(
    circle at 27.25% 26.5%,
    rgba(255, 208, 208, 0.48) 0%,
    rgba(212, 93, 93, 0.25) 59.67%,
    rgba(167, 49, 49, 0.26) 78.59%,
    rgba(130, 25, 25, 0.23) 100%
  );
  filter: drop-shadow(3px 6px 27px rgba(223, 125, 125, 0.25)) blur(2.5px);
  backdrop-filter: blur(2px);
  border-radius: 50%;
  z-index: 99;
  position: absolute;
  left: -8rem;
  bottom: 1.2rem;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const RedLight = styled.div`
  position: absolute;
  width: 19.4375rem;
  height: 19.4375rem;
  flex-shrink: 0;
  border-radius: 19.4375rem;
  opacity: 0.5;
  background: #961a1a;
  filter: blur(196px);
  left: -6.4rem;
  top: 8rem;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;
