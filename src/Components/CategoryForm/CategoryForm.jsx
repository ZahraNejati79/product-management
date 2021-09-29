import { useState } from "react";
import Select from "react-select";
import styles from "./CategoryForm.module.css";
const CategoryForm = ({ submitHandler, options, selectCategory }) => {
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
    selectCategory(selectedOptions.value);
  };
  return (
    <>
      <div className={styles.formCategory}>
        <h2>Add products category</h2>
        <form onSubmit={onSubmit} className={styles.form}>
          <input
            type="text"
            value={category}
            onChange={changeHandler}
            placeholder="category name"
          />
          <button type="submit">Add Category</button>
        </form>
      </div>
      <div className={styles.select}>
        <h3> Add new product</h3>
        <Select
          placeholder="slelect product category"
          options={options}
          onChange={selectChange}
          value={selectedOptions}
        />
      </div>
    </>
  );
};

export default CategoryForm;
