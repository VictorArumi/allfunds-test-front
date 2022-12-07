import New from "../New/New";
import NewsListStyled from "./NewsListStyled";

const NewsList = ({ news }) => {
  return (
    <NewsListStyled>
      {news.map((_new) => {
        return (
          <li className="new-container" key={_new.id}>
            <New _new={_new} />
          </li>
        );
      })}
    </NewsListStyled>
  );
};

export default NewsList;
