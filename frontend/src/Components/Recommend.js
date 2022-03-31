import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Loader from "./Loader";
import Message from "./Message";
import { listTopProducts } from "../Actions/productActions";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { Card } from "react-bootstrap";
import "swiper/css";

const Recommend = () => {
  const dispatch = useDispatch();

  const productTopRated = useSelector((state) => state.productTopRated);
  const { loading, error, products } = productTopRated;

  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message content={error} />
  ) : (
    <section>
      <h1 className="heading">
        <span>Similar Products</span>
      </h1>
      <Swiper
        dragSize={5}
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        spaceBetween={20}
        grabCursor={true}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          991: { slidesPerView: 3 },
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
      >
        {products.map((product) => (
          <SwiperSlide key={product._id}>
            <Card className="my-3 p-3 rounded products">
              <Link to={`/product/${product._id}`}>
                <Card.Img
                  className="recommend__image"
                  src={product.image}
                  alt={product.title}
                  variant="top"
                />
              </Link>

              <Card.Body>
                <Link to={`/product/${product._id}`}>
                  <Card.Title as="div">
                    <strong className="product__name">{product.name}</strong>
                  </Card.Title>
                </Link>

                <Card.Text as="div">
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                  />
                </Card.Text>

                <Card.Text as="h3" className="product__price">
                  ${product.price}
                </Card.Text>
              </Card.Body>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Recommend;
