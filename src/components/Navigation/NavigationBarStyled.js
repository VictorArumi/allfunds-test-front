import styled from "styled-components";

const NavigationBarStyled = styled.div`
  .navigation-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    gap: 5rem;
    border-bottom: 0.1rem solid #ededed;
    flex-wrap: wrap;

    @media (max-width: 700px) {
      gap: 0.5rem;
      padding: 0.3rem;
    }

    .nav-button {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      cursor: pointer;
      font-weight: 600;
      text-decoration: none;
      color: #ffffff;
      width: 7rem;
      height: 2rem;
      background-color: #212948;
      border-radius: 1rem;

      border: 0.1rem solid #ffffff;

      @media (max-width: 700px) {
        height: 1.5rem;
        width: 5.5rem;
        font-size: 0.8rem;
      }
    }
  }
`;

export default NavigationBarStyled;
