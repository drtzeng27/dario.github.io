import styled from "@emotion/styled";

export const ContactWrapper = styled.div`
  margin: 5rem 0;
`;

export const Email = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  row-gap: 1rem;

  span {
    font-size: 1rem;
    font-weight: 400;
  }

  @media (min-width: 576px) {
    span {
      font-size: 1.25rem;
    }
  }
  @media (min-width: 992px) {
    span {
      font-size: 1.5rem;
    }
  }
`;

export const Socials = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex direction: column;
  justify-content: center;
  padding-top: 3rem;

  .social-icon {
    width: 100%
    height: 100%
    padding-left: 3rem;
    padding-right: 3rem;
  }

  .social-icon:hover {
    opacity: 0.5
  }

  .SocialIcon {
    display: flex;
    justify-content: center
  }


`;
