import NewStyled from "./NewStyled";
import moment from "moment";

const New = ({ _new }) => {
  return (
    <NewStyled>
      <div className="new-header">
        <h3 className="new-header__title">{_new.title}</h3>
        <h4 className="new-header__description">{_new.description}</h4>
        <div className="new-header__info">
          <p className="author">Author: {_new.author.authorName}</p>
          <p className="post-date">
            Posted:{" "}
            <time dateTime={_new.storageDate}>
              {moment(_new.storageDate).format("MMMM Do YYYY, h:mm a")}
            </time>{" "}
          </p>
        </div>
      </div>
      <section className="new-body">
        <p className="new-content"> {_new.content}</p>
      </section>
      <footer className="new-footer">
        {_new.archived ? (
          <>
            <p className="archive-date">
              Archived:{" "}
              <time dateTime={_new.archiveDate}>
                {moment(_new.archiveDate).format("MMMM Do YYYY, h:mm a")}
              </time>{" "}
            </p>
            <button className="delete-button">Delete New</button>
          </>
        ) : (
          <button className="archive-button">Archive New</button>
        )}
      </footer>
    </NewStyled>
  );
};

export default New;
