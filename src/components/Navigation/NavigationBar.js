import { Link } from "react-router-dom";
import NavigationBarStyled from "./NavigationBarStyled";

const NavigationBar = () => {
  return (
    <NavigationBarStyled>
      <nav className="navigation-container">
        <Link className="nav-button" to={"/news"}>
          News
        </Link>
        <Link className="nav-button" to={"/archived"}>
          Archived
        </Link>
      </nav>
    </NavigationBarStyled>
  );
};

export default NavigationBar;
