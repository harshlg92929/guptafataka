import { useState } from "react";
import "./searchbar.css";
import { fetchFataka } from "../../firebase";
import { useEffect } from "react";

const SearchBar = ({ setFilterList }) => {
  const [fatakaList, setfatakaList] = useState([]);

  const fetchFatakaList = async () => {
    const data = await fetchFataka();
    setfatakaList(data);
  };

  useEffect(() => {
    fetchFatakaList();
  }, []);

  const [searchWord, setSearchWord] = useState(null);
  const handelChange = (input) => {
    setSearchWord(input.target.value);
    setFilterList(
      fatakaList.filter((item) =>
        item.name?.toLowerCase().includes(searchWord?.toLowerCase())
      )
    );
  };
  return (
    <div className="search-container">
      <input type="text" placeholder="Search..." onChange={handelChange} />
      <ion-icon name="search-outline" className="search-icon"></ion-icon>
    </div>
  );
};

export default SearchBar;
