import styled from "styled-components";

const NewFormStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  .new-form {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    gap: 0.2rem;
  }

  label {
    width: 100%;
    margin-bottom: 10px;
    background-color: #fff;
    text-align: left;
    @media (max-width: 700px) {
      font-size: 0.9rem;
    }
  }
  .inputs-container {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  input {
    width: 100%;
    height: 2rem;
    padding-left: 8px;
    margin-top: 4px;
    background-color: #f2f2f2;
    border: 0.05rem #c4c4c4 solid;
    border-radius: 0.25rem;

    @media (max-width: 700px) {
      height: 1.5rem;
      font-size: 0.75rem;
    }
  }

  .submit-button {
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: 10rem;
    height: 3rem;
    background-color: #1974b6;
    border: none;
    border-radius: 1.5rem;
    color: #fff;
    font-size: 1rem;
    font-weight: 300;
    cursor: pointer;

    @media (max-width: 700px) {
      margin-top: 0.3rem;
      margin-bottom: 0.5rem;
      font-size: 0.7rem;
      width: 6rem;
      height: 2rem;
    }
  }
`;

export default NewFormStyled;
