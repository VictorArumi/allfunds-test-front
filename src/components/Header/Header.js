import HeaderStyled from "./HeaderStyled";

const Header = () => {
  return (
    <HeaderStyled>
      <div className="app-title">
        <img
          className="app-title__logo"
          src={`../../news-favicon.ico`}
          alt="App logo"
        />

        <h1 className="app-title__text">Allfunds news app</h1>
      </div>
      <nav className="navigation-container">
        <button className="nav-button">News</button>
        <button className="nav-button">Archived</button>
      </nav>
    </HeaderStyled>
  );
};

export default Header;
