import styled from "styled-components";

const NewStyled = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  border: 0.1rem solid #ededed;
  padding: 3rem;

  @media (max-width: 700px) {
    padding: 1.2rem;
  }

  .new-header {
    display: flex;
    flex-direction: column;

    &__title {
      margin: 1rem;
      font-size: 2.5rem;
      color: #212948;
      text-align: center;

      @media (max-width: 700px) {
        margin: 0.5rem;
        font-size: 1.5rem;
      }
    }

    &__description {
      margin: 1rem;
      font-size: 1.25rem;
      font-weight: 500;
      text-align: center;

      @media (max-width: 700px) {
        margin: 0.5rem;
        font-size: 1rem;
      }
    }

    &__info {
      display: flex;
      flex-wrap: wrap;
      padding: 0.5rem 0;

      .author {
        margin: 0;
        margin-right: 1rem;

        @media (max-width: 700px) {
          font-size: 0.75rem;
          margin-right: 0.5rem;
        }
      }

      .post-date {
        margin: 0;

        @media (max-width: 700px) {
          font-size: 0.75rem;
        }
      }
    }
  }

  .new-body {
    display: flex;

    .new-content {
      width: 100%;
      text-align: justify;
      overflow-wrap: break-word;

      @media (max-width: 700px) {
        font-size: 0.8rem;
      }
    }
  }

  .new-footer {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  }

  .archive-date {
    margin: 0.5rem;
  }
  button {
    display: flex;
    height: auto;
    color: white;
    padding: 0.5rem;
    background-color: #212948;
    border-radius: 0.5rem;
    border: 0.1rem solid #212948;
  }

  .delete-button {
    background-color: #c00000;
    border: 0.1rem solid #c00000;
    font-weight: 700;
  }
`;

export default NewStyled;
