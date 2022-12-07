import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewsList from "../../components/NewsList/NewsList";
import { loadArchivedNewsThunk } from "../../redux/thunks/newsThunks";
import NewsPageStyled from "../NewsPage/NewsPageStyled";

const ArchivedNewsPage = () => {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(loadArchivedNewsThunk());
  }, [dispatch]);

  return (
    <NewsPageStyled>
      <div className="page-title-container">
        <h2 className="page-title page-title--archived">Archived News view</h2>
      </div>
      <div className="list-container">
        <NewsList news={news} />
      </div>
    </NewsPageStyled>
  );
};

export default ArchivedNewsPage;
