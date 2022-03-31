import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import "./Main.css";

const Product = ({ product }) => {
  return (
    <section className="trainers" id="trainers">
      <Card className="my-3 p-3 rounded products">
        <Link to={`/product/${product._id}`}>
          <Card.Img src={product.image} alt={product.title} variant="top" />
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
    </section>
  );
};

export default Product;
