import styled from "styled-components";

const NewStyled = styled.article`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  padding: 1rem;
  border: 0.1rem solid #ededed;
  padding: 3rem;

  .new-header {
    display: flex;
    flex-direction: column;

    &__title {
      margin: 1rem;
      font-size: 2.5rem;
      color: #212948;
      text-align: center;
    }

    &__description {
      margin: 1rem;
      font-size: 1.2rem;
      font-weight: 500;
      text-align: center;
    }

    &__info {
      display: flex;
      flex-wrap: wrap;
      padding: 0.5rem 0;

      .author {
        margin: 0;
        margin-right: 1rem;
      }

      .post-date {
        margin: 0;
      }
    }
  }

  .new-body {
    display: flex;

    .new-content {
      width: 100%;
      text-align: justify;
      overflow-wrap: break-word;
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
