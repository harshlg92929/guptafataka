import Select from "react-select";
import { useEffect } from "react";
import { useState } from "react";
import { fetchCategories, fetchFataka } from "./../firebase";

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "#0f3460",
    color: "white",
    borderRadius: "5px",
    border: "none",
    boxShadow: "none",
    width: "200px",
    height: "40px",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#0f3460" : "white",
    color: state.isSelected ? "white" : "#0f3460",
    "&:hover": {
      backgroundColor: "#0f3460",
      color: "white",
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "white",
  }),
};

const FilterSelect = ({ setFilterList }) => {
  const [category, setCategory] = useState([]);
  const [fatakaList, setfatakaList] = useState([]);

  const fetchFatakaList = async () => {
    const data = await fetchFataka();
    setfatakaList(data);
  };

  const handleChange = (selectedOption) => {
    setFilterList(
      fatakaList.filter((item) => item.category === selectedOption.value)
    );
  };

  const fetchCategoryList = async () => {
    const data = await fetchCategories();
    setCategory(data);
  };

  useEffect(() => {
    fetchCategoryList();
    fetchFatakaList();
  }, []);

  return (
    <Select
      options={category}
      defaultValue={{ value: "", label: "Filter By Category" }}
      styles={customStyles}
      onChange={handleChange}
    />
  );
};

export default FilterSelect;
