import { Col, Container, Row } from "react-bootstrap";
import FilterSelect from "../components/FilterSelect";
import SearchBar from "../components/SeachBar/SearchBar";
import { Fragment, useState } from "react";
import ShopList from "../components/ShopList";
import Banner from "../components/Banner/Banner";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";
import { db, fetchFataka } from "./../firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { useEffect } from "react";

const Shop = () => {
  const [filterList, setFilterList] = useState([]);
  useWindowScrollToTop();

  const fetchFatakaList = async () => {
    const data = await fetchFataka();
    setFilterList(data);
  };

  useEffect(() => {
    fetchFatakaList();
  }, []);

  return (
    <Fragment>
      <Banner title="Select Items from the list" />
      <section className="filter-bar">
        <Container className="filter-bar-contianer">
          <Row className="justify-content-center">
            <Col md={4}>
              <FilterSelect setFilterList={setFilterList} />
            </Col>
            <Col md={6}>
              <SearchBar setFilterList={setFilterList} />
            </Col>
          </Row>
        </Container>
        <Container>
          <ShopList productItems={filterList} />
        </Container>
      </section>
    </Fragment>
  );
};

export default Shop;
