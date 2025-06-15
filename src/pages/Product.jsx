import { Fragment, useEffect, useState } from "react";
import Banner from "../components/Banner/Banner";
import { Container } from "react-bootstrap";
import ShopList from "../components/ShopList";
import { useParams } from "react-router-dom";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import ProductReviews from "../components/ProductReviews/ProductReviews";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";
import { fetchFataka } from "../firebase";

const Product = () => {
  const [fatakaList, setfatakaList] = useState([]);
  const fetchFatakaList = async () => {
    const data = await fetchFataka();
    setfatakaList(data);
  };

  useEffect(() => {
    fetchFatakaList();
  }, []);
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState({});
  useEffect(() => {
    window.scrollTo(0, 0);
    let selectedItem = fatakaList.filter((item) => item.id === parseInt(id))[0];
    setSelectedProduct(selectedItem);
  }, [fatakaList, id]);

  useWindowScrollToTop();

  return (
    <Fragment>
      {/* <Banner title={selectedProduct?.productName} /> */}
      <ProductDetails selectedProduct={selectedProduct} />
      {/* <ProductReviews selectedProduct={selectedProduct} /> */}
      {/* <section className="related-products">
        <Container>
          <h3>You might also like</h3>
        </Container>
        <ShopList productItems={relatedProducts} />
      </section> */}
    </Fragment>
  );
};

export default Product;
