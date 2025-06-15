import { Fragment } from "react";
import Section from "../components/Section";
import { fetchFataka, updateCategory, uploadFatakaData } from "./../firebase";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";
import { useEffect } from "react";
import { useState } from "react";

const Home = () => {
  const [fatakaList, setfatakaList] = useState([]);
  useWindowScrollToTop();

  const fetchFatakaList = async () => {
    const data = await fetchFataka();
    setfatakaList(data);
  };

  useEffect(() => {
    fetchFatakaList();
  }, []);
  const newArrivalData = fatakaList.filter((item) => item);
  useWindowScrollToTop();
  return (
    <Fragment>
      <Section
        title="New Arrivals"
        bgColor="white"
        productItems={newArrivalData}
      />
      {/* <button
        onClick={() => {
          uploadFatakaData();
          updateCategory();
        }}
      >
        Add
      </button> */}
    </Fragment>
  );
};

export default Home;
