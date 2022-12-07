import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppStyled from "./AppStyled";
import Header from "./components/Header/Header";
import NewsList from "./components/NewsList/NewsList";
import { loadNewsThunk } from "./redux/thunks/newsThunks";

function App() {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(loadNewsThunk());
  }, [dispatch]);

  return (
    <AppStyled>
      <Header />
      <div className="list-container">
        <NewsList news={news} />
      </div>
    </AppStyled>
  );
}

export default App;
