import { Col } from "react-bootstrap";
import "./product-card.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decreaseQty } from "../../app/features/cart/cartSlice";

const ProductCard = ({ title, productItem }) => {
  const dispatch = useDispatch();
  const router = useNavigate();
  const handelClick = () => {
    router(`/shop/${productItem.id}`);
  };
  const handelAdd = (productItem) => {
    dispatch(addToCart({ product: productItem, num: 1 }));
    toast.success("Product has been added to cart!");
  };

  const { cartList } = useSelector((state) => state.cart);

  let isItemSelected = cartList.filter(
    (item) => item.id === productItem.id
  )?.[0];

  return (
    <Col md={4} sm={12} xs={12} className="product mtop">
      {/* {title === "Big Discount" ? (
        <span className="discount">{productItem.discount}% Off</span>
      ) : null} */}
      {/* <img
        loading="lazy"
        onClick={() => handelClick()}
        src={productItem.imageUrl}
        alt=""
      /> */}
      {/* <div className="product-like">
        <ion-icon name="heart-outline"></ion-icon>
      </div> */}
      <div className="product-details">
        {/* <div className="rate">
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
        </div> */}
        <div className="price">
          <div className="minQty">
            <h4 onClick={() => handelClick()}>{productItem.name}</h4>
            <span onClick={() => handelClick()}>
              Minimum Qty: {productItem.minQuantity}
            </span>
            <h4>₹{productItem.price}</h4>
          </div>
          <div className="price">
            <Col xs={12} sm={12} md={12} className="cartControl">
              <button
                // disabled={!isItemSelected}
                className={isItemSelected ? "add" : "disabled"}
                onClick={() =>
                  dispatch(addToCart({ product: productItem, num: 1 }))
                }
              >
                <i className="fa-solid fa-plus"></i>
              </button>
              {isItemSelected?.qty}
              <button
                disabled={!isItemSelected}
                className={isItemSelected ? "add" : "disabled"}
                onClick={() => dispatch(decreaseQty(productItem))}
              >
                <i className="fa-solid fa-minus"></i>
              </button>
            </Col>
            {/* <button
              aria-label="Add"
              type="submit"
              className="add"
              onClick={() => handelAdd(productItem)}
            >
              <ion-icon name="add"></ion-icon>
            </button> */}
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
