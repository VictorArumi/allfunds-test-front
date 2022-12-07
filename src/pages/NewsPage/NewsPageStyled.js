import styled from "styled-components";

const NewsPageSyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .page-title-container {
    width: 70%;

    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
    margin-bottom: 0;

    @media (max-width: 700px) {
      margin: 1rem 0;
    }
  }

  .page-title {
    display: flex;
    background-color: #212948;
    padding: 0.2rem 1rem;
    margin: 0;
    font-size: 3rem;
    color: white;

    @media (max-width: 700px) {
      font-size: 1rem;
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

export default NewsPageSyled;
