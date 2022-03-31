import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Product from "../Components/Product";
import Loader from "../Components/Loader";
import Message from "../Components/Message";
import Paginate from "../Components/Paginate";
import Meta from "../Components/Meta";
import { listProducts } from "../Actions/productActions";
import ProductCarousel from "../Components/ProductCarousel";
import About from "../Components/About";
import Features from "../Components/Features";
import Blogs from "../Components/Blogs";
import Recommend from "../Components/Recommend";

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Meta />
      {!keyword ? (
        <>
          <ProductCarousel />
          <About />
          <Features />
        </>
      ) : (
        <Link to="/" className="btn btn-light btn-custom">
          Go Back
        </Link>
      )}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <section>
            <h1 className="heading">
              <span>Latest Products</span>
            </h1>
            <Row>
              {products.map((product) => (
                <Col key={product._id} md={4}>
                  <Product product={product} />
                </Col>
              ))}
            </Row>
          </section>

          {!keyword ? <Blogs /> : <Recommend />}
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
