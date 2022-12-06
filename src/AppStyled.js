import styled from "styled-components";

const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  padding-top: 9.3rem;

  @media (max-width: 700px) {
    padding-top: 5rem;
  }

  .prova {
    display: flex;
    flex-direction: column;
    background-color: red;
    height: 5rem;
  }
`;

export default AppStyled;
