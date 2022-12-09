import { useState } from "react";
import { useDispatch } from "react-redux";
import { createNewThunk } from "../../redux/thunks/newsThunks";
import NewFormStyled from "./NewFormStyled";

const NewForm = ({ setOpenForm }) => {
  const dispatch = useDispatch();

  const emptyFormValues = {
    title: "",
    description: "",
    content: "",
  };

  const [inputsData, setInputsData] = useState(emptyFormValues);

  const changeData = (event) => {
    setInputsData({
      ...inputsData,
      [event.target.id]: event.target.value,
    });
  };

  const createNewSubmit = (event) => {
    event.preventDefault();

    const formData = {
      title: inputsData.title,
      description: inputsData.description,
      content: inputsData.content,
      author: "6391d9b4366bfe71577d3ed2",
    };

    dispatch(createNewThunk(formData));
    setOpenForm(false);
  };

  return (
    <NewFormStyled>
      <form className="new-form" autoComplete="off" noValidate>
        <div className="inputs-container">
          <label htmlFor="title">
            Title
            <input
              type="text"
              maxlength="150"
              placeholder="Type here (max 150 char.)"
              name="Title"
              id="title"
              value={inputsData.title}
              onChange={changeData}
            />
          </label>
          <label htmlFor="description">
            Description
            <input
              type="text"
              maxlength="300"
              placeholder="Type here (max 300 char.)"
              name="Description"
              id="description"
              value={inputsData.description}
              onChange={changeData}
            />
          </label>
          <label htmlFor="content">
            Content
            <input
              type="text"
              maxlength="40000"
              placeholder="Type here (max 40.000 char.)"
              name="Content"
              id="content"
              value={inputsData.content}
              onChange={changeData}
            />
          </label>
          <div className="disclaimer-container">
            <p className="disclaimer">*All fields are required</p>
          </div>
        </div>
        <button
          className="submit-button"
          type="submit"
          onClick={createNewSubmit}
        >
          Create
        </button>
      </form>
    </NewFormStyled>
  );
};

export default NewForm;
