import { useParams } from "react-router";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../../../component/product/product";
import "./ProductsPage.css";
import ErrorPage from "../../../component/errorPage/ErrorPage";
import Loader from "../../../component/Loader/Loader";

function ProductsPage() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);

  const { loading, error, products } = productList;

 

  return (
    <div className="ProductsPage-container">
      { loading ? (  <Loader></Loader> ) : error ?  (  <>  <ErrorPage   error={error}  ></ErrorPage> </> )  : (      
      <div className="ProductsPage" >
      {products.map((product) => {
        return (
          <Product
            props={{
              brand: product.brand,
              rating: product.rating,
              name: product.name,
              numReviews: product.numReviews,
              price: product.price,
            }}
          ></Product>
        );
      })}
</div>)  }

    </div>
  );
}

export default ProductsPage;
