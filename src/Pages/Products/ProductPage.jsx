import { useParams } from "react-router";
import "./ProductPage.css";
import f1 from "../../assets/img/products/f1.jpg";
import { useEffect, useRef, useState } from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import OpenClick from "../../component/openClick/OpenClick";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetail } from "../../actions/productAction";
import Loader from "../../component/Loader/Loader";
import ErrorPage from "../../component/errorPage/ErrorPage";
import StarIcon from "@mui/icons-material/Star";
import classNames from "classnames";
import Slide_comp from "../../component/slide-componement/slide_comp";
import {
  addCart,
  getCart,
  removeCart,
  updateCart,
} from "../../actions/cartAction";

function ProductPage() {
  const { id } = useParams();
  const inputRef = useRef(null);
  const priceRef = useRef();
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.productDetail);
  const CartItems = useSelector((state) => state.CartItem);
  const { cartLoading, cartItems } = CartItems;
  const { loading, error, product } = productDetail;

  const [open, setOpen] = useState();

  useEffect(() => {
    dispatch(listProductDetail(id));
  }, [dispatch]);

  const addToCartHundler = () => {
    setOpen((open) => !open);

    updatecart() ; 
    console.log(CartItems);
  };

  const updatecart = () => {
    console.log(cartItems);
    if (cartItems && cartLoading === false && cartItems.length === 0) {
      dispatch(addCart(id, Number(inputRef.current.value)));
    } else if (cartItems && cartLoading === false && cartItems.length >= 0) {
      const inputQty = Number(inputRef.current.value);
      const product = cartItems[0].cartItems.products.findIndex(
        (x) => x.product === id
      );

      if (product >= 0) {
        cartItems[0].cartItems.products[product].qty += inputQty;
        dispatch(updateCart(cartItems[0]._id, cartItems[0].cartItems.products));
        console.log(cartItems[0].cartItems.products);
      } else {
        const newCart = [
          ...cartItems[0].cartItems.products,
          { product: id, qty: 1 },
        ];
        dispatch(updateCart(cartItems[0]._id, newCart));
      }
    }
  }

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [open]);

  return (
    <>
      <div
        onClick={() => {
          setOpen((open) => !open);
        }}
        className={classNames("black-screen", { "show-div": open })}
      ></div>
      {loading ? (
        <Loader></Loader>
      ) : error ? (
        <ErrorPage error={error}></ErrorPage>
      ) : (
        <div className="Product-container">
          <div className="prod-sec-1">
            <img src={f1}></img>
          </div>
          <div className="prod-sec-2">
            <div className="prod-title">
              <h2>{product.brand}</h2>
              <h4>{product.name}</h4>
            </div>
            <div className="prod-reviews">
              <div className="star">
                {(() => {
                  const stars = [];
                  for (let i = 0; i < product.rating; i++) {
                    stars.push(<StarIcon key={i} />);
                  }
                  return stars;
                })()}

                <span style={{ cursor: "pointer" }}>
                  {product.numReviews} reviews
                </span>
              </div>
              {product.countInStock > 0 ? (
                <h4>
                  {" "}
                  <span>In stock</span> {product.countInStock} left{" "}
                </h4>
              ) : (
                <h4 className="out-of-stock">Out Of Stock</h4>
              )}
            </div>
            <div className="prod-price">
              <h4>{product.price}$</h4>
            </div>
            <div className="line"></div>
            <div className="prod-size">
              <h4>Size </h4>
              <div className="size-wrapper">
                <div className="size">5M</div>
                <div className="size">5.5M</div>
                <div className="size">6M</div>
                <div className="size">7M</div>
                <div className="size">7.5M</div>
                <div className="size">8M</div>
                <div className="size">8.5M</div>
                <div className="size">9M</div>
                <div className="size">9.5M</div>
                <div className="size">10M</div>
                <div className="size">10.5M</div>
              </div>
            </div>

            <div className="prod-desc">
              <h4>Decription</h4>
              <ul>
                <li>Crystal Satin Upper</li>
                <li>Ankle Strap and Buckle System for Ease of Fit</li>
                <li>
                  Adorned with Clear Gemstones in a Chandelier pattern up the
                  foot
                </li>
                <li>Leather Lining</li>
                <li>
                  Leather/Fabric Sock Lining with Antonio Melani Collection
                  Woven Sock Label
                </li>
                <li>
                  Leather Outsole with Antonio Melani Collection Crystal
                  embellishment on outsolet
                </li>
                <li>Covered Heel</li>
                <li>Approx. 3.7" heel height</li>
              </ul>
            </div>
            <div className="open-click-elemnts">
              <OpenClick
                props={{
                  title: "Shipping informations",
                  description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias saepe ducimus voluptas laborum modi magni harum enim officia minus deleniti ad quam, quidem porro, sunt autem tempora est? Eaque, minus!",
                  width: "10px",
                }}
              ></OpenClick>
            </div>
          </div>
          <div className="prod-sec-3">
            <div className="price-info">
              <div className="shipping-info">
                <h4>
                  {" "}
                  <a>
                    {" "}
                    <LocalShippingIcon className="icon-shopping"></LocalShippingIcon>{" "}
                    <p>SOLD AND SHIPPED BY HAPPYHULL </p>
                  </a>{" "}
                </h4>
              </div>
              <div className="add-to-cart-section">
                <h4>Sales ends in 11 Hours</h4>
                <h4>Estimated VAT inclusive </h4>
                <div className="price-section">
                  <h4>
                    HKD$ <span ref={priceRef}>5710.99</span>{" "}
                  </h4>
                </div>
                <div className="cart-wrapper">
                  <div className="qt-box">
                    {" "}
                    <input
                      type={"text"}
                      value={product.countInStock > 0 ? 1 : 0}
                      maxLength={3}
                      min={1}
                      onChange={() => {}}
                      ref={inputRef}
                    />{" "}
                    <div className="shooping-button-wrapper">
                      <button
                        className="plus button"
                        onClick={() => {
                          if (
                            inputRef.current.value < 10 &&
                            product.countInStock > 0
                          )
                            inputRef.current.value =
                              Number(inputRef.current.value) + 1;
                          console.log(parseFloat(priceRef.current.innerText));
                        }}
                      >
                        +
                      </button>{" "}
                      <button
                        className="minus button "
                        onClick={() => {
                          if (
                            inputRef.current.value != 1 &&
                            product.countInStock > 0
                          )
                            inputRef.current.value =
                              Number(inputRef.current.value) - 1;
                        }}
                      >
                        -
                      </button>
                    </div>{" "}
                  </div>{" "}
                  <button
                    onClick={addToCartHundler}
                    className={product.countInStock === 0 ? "disabled" : ""}
                  >
                    Add To cart
                  </button>{" "}
                </div>
              </div>
              <div className="compare-section">
                <a>
                  {" "}
                  <input type={"checkbox"} /> ADD TO COMPARE{" "}
                </a>
                <a>
                  {" "}
                  <FavoriteBorderIcon
                    style={{
                      fontSize: "18px",
                      marginBottom: "-4px",
                      marginLeft: "-3px",
                    }}
                    className="fav-border"
                  ></FavoriteBorderIcon>{" "}
                  ADD TO COMPARE{" "}
                </a>
                <a>
                  {" "}
                  <HelpOutlineIcon
                    style={{
                      fontSize: "18px",
                      marginBottom: "-4px",
                      marginLeft: "-3px",
                    }}
                    className="help-outline"
                  ></HelpOutlineIcon>{" "}
                  REPORT A LISTING{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      <Slide_comp props={{ open: open }}></Slide_comp>
    </>
  );
}

export default ProductPage;
