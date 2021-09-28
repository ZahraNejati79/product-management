import { useState } from "react";
import Select from "react-select";

const CategoryForm = ({ submitHandler, options }) => {
  const [category, setCategory] = useState("");
  const selectedOptions = "";
  const changeHandler = (e) => {
    setCategory(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    submitHandler(category);
    setCategory("");
  };
  const selectChange = (selectedOptions) => {
    console.log("this is selectChange", selectedOptions);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" value={category} onChange={changeHandler} />
        <button type="submit">Add Category</button>
      </form>
      <Select
        options={options}
        onChange={selectChange}
        value={selectedOptions}
      />
    </>
  );
};

export default CategoryForm;
