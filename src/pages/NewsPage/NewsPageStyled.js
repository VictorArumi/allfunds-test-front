import styled from "styled-components";

const NewsPageStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .page-header {
    width: 70%;

    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
    margin-bottom: 0;

    @media (max-width: 700px) {
      margin: 1rem 0;
    }

    &__title {
      display: flex;
      background-color: #212948;
      padding: 0.2rem 1rem;
      margin: 0;
      font-size: 3rem;
      color: #ffffff;

      &--archived {
        background-color: #c00000;
      }
      @media (max-width: 700px) {
        font-size: 1rem;
      }
    }
  }

  .add-new-container {
    cursor: pointer;
    margin-top: 1rem;
    gap: 0.4rem;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 700px) {
      margin: 0;
    }

    .icon-container {
      display: flex;
      align-items: center;
    }

    p {
      font-size: 1.2rem;
      margin: 0;

      @media (max-width: 700px) {
        font-size: 1rem;
      }
    }
  }

  .list-container {
    display: flex;
    align-items: center;
    justify-content: center;
    vertical-align: center;
    width: 70%;
  }
`;

export default NewsPageStyled;
