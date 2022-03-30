import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../Components/Message";
import Loader from "../Components/Loader";
import Paginate from "../Components/Paginate";
import { listBlogs, deleteBlog, createBlog } from "../Actions/blogActions";
import { BLOG_CREATE_RESET } from "../Constants/blogConstants";

const BlogListScreen = ({ history, match }) => {
  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const blogList = useSelector((state) => state.blogList);
  const { loading, error, blogs, page, pages } = blogList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const blogDelete = useSelector((state) => state.blogDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = blogDelete;

  const blogCreate = useSelector((state) => state.blogCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    blog: createdBlog,
  } = blogCreate;

  useEffect(() => {
    dispatch({ type: BLOG_CREATE_RESET });

    if (!userInfo.isAdmin) {
      history.push("/login");
    }

    if (successCreate) {
      history.push(`/admin/blog/${createdBlog._id}/edit`);
    } else {
      dispatch(listBlogs("", pageNumber));
    }
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    createdBlog,
    successCreate,
    pageNumber,
  ]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteBlog(id));
    }
  };

  const createBlogHandler = () => {
    dispatch(createBlog());
  };

  return (
    <section>
      <Row className="align-items-center">
        <Col>
          <h1 className="heading__main heading">
            <span>Blogs</span>
          </h1>
        </Col>
        <Col className="text-right" style={{ textAlign: "right" }}>
          <Button className="my-3" onClick={createBlogHandler}>
            <i className="fas fa-plus"></i> Create Blog
          </Button>
        </Col>
      </Row>
      {loadingDelete && <Loader />}
      {errorDelete && <Message variant="danger">{errorDelete}</Message>}
      {loadingCreate && <Loader />}
      {errorCreate && <Message variant="danger">{errorCreate}</Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Table striped bordered responsive className="table-sm">
            <thead>
              <tr>
                <th>AUTHOR</th>
                <th>TITLE</th>
                <th>DESCRIPTION</th>
                <th>CREATED AT</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog._id}>
                  <td>{blog.author}</td>
                  <td>{blog.title}</td>
                  <td>{blog.description}</td>
                  <td>{blog.createdAt.substring(0, 10)}</td>
                  <td>
                    <LinkContainer
                      to={`/admin/blog/${blog._id}/edit`}
                      style={{ marginRight: "10px" }}
                    >
                      <Button variant="light" className="btn-sm btn-custom">
                        <i className="fas fa-edit"></i>
                      </Button>
                    </LinkContainer>
                    <Button
                      variant="danger"
                      className="btn-sm btn-custom"
                      onClick={() => deleteHandler(blog._id)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Paginate pages={pages} page={page} isAdmin={true} />
        </>
      )}
    </section>
  );
};

export default BlogListScreen;
