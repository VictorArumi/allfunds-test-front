import styled from "styled-components";

const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  padding-top: 9.3rem;

  @media (max-width: 700px) {
    padding-top: 5rem;
  }
`;

export default AppStyled;
