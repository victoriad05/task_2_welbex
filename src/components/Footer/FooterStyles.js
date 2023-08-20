import styled from "styled-components";

export const FooterContainer = styled.div`
  background: var(--bg-dark);
  height: 25%;
  display: flex;
  justify-content: center;
  padding-top: 3.3rem;
  padding-bottom: 1.5rem;

  @media screen and (max-width: 480px) {
    height: 100%;
  }
`;
export const FooterWrapper = styled.div`
  width: 71.3rem;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 480px) {
    width: 100%;
    flex-direction: column;
    padding-left: 1rem;
  }
`;
export const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 6.12rem;
  align-items: baseline;
  @media screen and (max-width: 480px) {
    flex-direction: column;
    gap: 1.87rem;
  }
`;
export const NavColomn = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Heading = styled.h2`
  margin-bottom: 1.25rem;
  text-transform: uppercase;
  color: #656566;
  font-size: 0.875rem;
  font-weight: 700;
`;
export const Container = styled.div`
  display: flex;
  gap: 3.5rem;
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Link = styled.a`
  margin-bottom: 0.63rem;
`;
export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media screen and (max-width: 480px) {
    align-items: flex-start;
    margin-top: 1.87rem;
  }
`;
export const Num = styled.p`
  margin-bottom: 1.25rem;
  @media screen and (max-width: 480px) {
    margin-bottom: 0.5rem;
  }

`;
export const Address = styled.p`
  margin-top: 1.25rem;

  @media screen and (max-width: 480px) {
    margin-top: 0.63rem;
  }
`;
export const Copyright = styled.p`
  margin-top: 4.38rem;
  font-family: var(--secondary-font);
  font-size: 0.75rem;
  @media screen and (max-width: 480px) {
    margin-top: 3.12rem;
  }
`;
export const PrivacyPolicy = styled.a`
  font-family: var(--secondary-font);
  font-size: 0.75rem;
  text-decoration: underline;
`;
