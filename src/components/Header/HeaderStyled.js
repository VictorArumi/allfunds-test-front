import styled from "styled-components";

const HeaderStyled = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  background-color: #212948;

  .app-title {
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    border-bottom: 0.1rem solid #ededed;
    flex-wrap: wrap;
    padding: 1rem;

    @media (max-width: 700px) {
      padding: 0.2rem;
    }

    &__text {
      color: #ffffff;
      font-size: 3rem;
      margin: 0.5rem;
      text-align: center;
      line-height: 3rem;

      @media (max-width: 700px) {
        font-size: 1rem;
        line-height: 1rem;
      }
    }

    &__logo {
      height: 3rem;

      @media (max-width: 700px) {
        height: 1.5rem;
      }
    }
  }
`;

export default HeaderStyled;
