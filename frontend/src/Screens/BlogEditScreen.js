import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../Components/Message";
import Loader from "../Components/Loader";
import FormContainer from "../Components/FormContainer";
import { listBlogsDetails, updateBlog } from "../Actions/blogActions";
import { BLOG_UPDATE_RESET } from "../Constants/blogConstants";
import axios from "axios";

const BlogEditScreen = ({ match, history }) => {
  const blogId = match.params.id;

  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState(0);
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();

  const blogDetails = useSelector((state) => state.blogDetails);
  const { loading, error, blog } = blogDetails;

  const blogUpdate = useSelector((state) => state.blogUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = blogUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: BLOG_UPDATE_RESET });
      history.push("/admin/bloglist");
    } else {
      if (!blog.author || blog._id !== blogId) {
        dispatch(listBlogsDetails(blogId));
      } else {
        setAuthor(blog.author);
        setTitle(blog.title);
        setImage(blog.image);
        setContent(blog.content);
        setDescription(blog.description);
      }
    }
  }, [blog, dispatch, blogId, successUpdate, history]);

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const { data } = await axios.post("/api/upload", formData, config);
      setImage(data);
      setUploading(false);
    } catch (error) {
      console.log(error);
      setUploading(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateBlog({
        _id: blogId,
        author,
        title,
        description,
        content,
        image,
      })
    );
  };

  return (
    <section style={{ marginTop: "20px" }}>
      <Link to="/admin/bloglist" className="btn btn-light my-3 btn-custom ">
        Go Back
      </Link>
      <FormContainer>
        <h1 className="heading__main heading">
          <span>Edit Blog</span>
        </h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="author" className="form__control">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="title" className="form__control">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="image" className="form__control">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image url"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
              <Form.Control type="file" onChange={uploadFileHandler} />
              {uploading && <Loader />}
            </Form.Group>

            <Form.Group controlId="description" className="form__control">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="Content" className="form__control">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                row="3"
                type="text"
                placeholder="Enter Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type="submit" variant="primary">
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </section>
  );
};

export default BlogEditScreen;
