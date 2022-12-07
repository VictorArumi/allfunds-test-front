import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewsList from "../../components/NewsList/NewsList";
import { loadNewsThunk } from "../../redux/thunks/newsThunks";
import NewsPageStyled from "./NewsPageStyled";

const NewsPage = () => {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(loadNewsThunk());
  }, [dispatch]);

  return (
    <NewsPageStyled>
      <div className="page-title-container">
        <h2 className="page-title">News view</h2>
      </div>
      <div className="list-container">
        <NewsList news={news} />
      </div>
    </NewsPageStyled>
  );
};

export default NewsPage;
