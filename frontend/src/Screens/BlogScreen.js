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
      <Link className="btn btn-light my-3 btn-custom" to="/">
        Go Back
      </Link>
      <h1 className="heading">
        <span>{blog.title}</span>
      </h1>

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
                style={{ width: "50%", height: "100%" }}
              />
            </Center>

            <p style={{ marginTop: "20px", fontSize: "16px", color: "white" }}>
              {blog.content}
            </p>
            <h2>Written by - {blog.author}</h2>
          </Row>
        </>
      )}
    </section>
  );
};

export default BlogScreen;
