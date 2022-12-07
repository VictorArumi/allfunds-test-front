import AppStyled from "./AppStyled";
import Header from "./components/Header/Header";
import NewsList from "./components/NewsList/NewsList";
import mockNews from "./mocks/mockNews";

function App() {
  return (
    <AppStyled>
      <Header />
      <div className="list-container">
        <NewsList news={mockNews} />
      </div>
    </AppStyled>
  );
}

export default App;
