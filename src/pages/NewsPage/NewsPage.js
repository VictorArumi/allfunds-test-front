import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewsList from "../../components/NewsList/NewsList";
import { loadNewsThunk } from "../../redux/thunks/newsThunks";
import NewsPageStyled from "./NewsPageStyled";
import { MdOutlineAddCircle } from "react-icons/md";
import NewForm from "../../components/NewForm/NewForm";

const NewsPage = () => {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news);

  const [openForm, setOpenForm] = useState(false);

  useEffect(() => {
    dispatch(loadNewsThunk());
  }, [dispatch]);

  return (
    <NewsPageStyled>
      <div className="page-header">
        <h2 className="page-header__title">News view</h2>
      </div>
      <div className="add-new-container" onClick={() => setOpenForm(!openForm)}>
        <p>Add new</p>
        <div className="icon-container">
          <MdOutlineAddCircle size={28} />
        </div>
      </div>
      {openForm ? <NewForm setOpenForm={setOpenForm} /> : ""}
      <div className="list-container">
        <NewsList news={news} />
      </div>
    </NewsPageStyled>
  );
};

export default NewsPage;
