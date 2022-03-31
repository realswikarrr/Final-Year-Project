import React, { useEffect } from "react";
import { Center } from "@mantine/core";
import { Link } from "react-router-dom";
import Loader from "../Components/Loader";
import Message from "../Components/Message";
import { Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listBlogsDetails } from "../Actions/blogActions";

const BlogScreen = ({ match }) => {
  const dispatch = useDispatch();

  const blogDetails = useSelector((state) => state.blogDetails);
  const { loading, error, blog } = blogDetails;

  useEffect(() => {
    dispatch(listBlogsDetails(match.params.id));
  }, [dispatch, match]);

  return (
    <section style={{ marginTop: "20px" }}>
      <Link className="btn btn-light btn-custom" to="/">
        Go Back
      </Link>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            <Center>
              <Image
                src={blog.image}
                style={{ width: "40%", height: "100%", borderRadius: "50%" }}
              />
            </Center>

            <Center>
              <h1 className="blog__title">{blog.title}</h1>
            </Center>

            <p className="blog__content">{blog.content}</p>

            <h2 className="blog__author">
              - <span>{blog.author}</span>
            </h2>
          </Row>
        </>
      )}
    </section>
  );
};

export default BlogScreen;
