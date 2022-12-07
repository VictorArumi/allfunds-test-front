import AppStyled from "./AppStyled";
import Header from "./components/Header/Header";
import NewsPage from "./pages/NewsPage/NewsPage";

function App() {
  return (
    <AppStyled>
      <Header />
      <NewsPage />
    </AppStyled>
  );
}

export default App;
