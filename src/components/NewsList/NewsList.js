import New from "../New/New";
import NewsListStyled from "./NewsListStyled";

const NewsList = ({ news }) => {
  console.log(news);
  return (
    <NewsListStyled>
      {news.map((_new, position) => {
        return (
          <li className="new-container" key={position}>
            <New _new={_new} />
          </li>
        );
      })}
    </NewsListStyled>
  );
};

export default NewsList;
