import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Autoplay } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import "swiper/css/autoplay";
import "swiper/css";
import "./Main.css";
import { listBlogs } from "../Actions/blogActions";
import Loader from "../Components/Loader";
import Message from "../Components/Message";

const Blogs = () => {
  const dispatch = useDispatch();

  const blogList = useSelector((state) => state.blogList);
  const { loading, error, blogs } = blogList;
  useEffect(() => {
    dispatch(listBlogs());
  }, [dispatch]);

  return (
    <section className="blogs" id="blogs">
      <h1 className="heading">
        <span>Blog Posts</span>
      </h1>
      <div className="swiper blogs-slider">
        <Swiper
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
          <div className="swiper-wrapper">
            {loading ? (
              <Loader />
            ) : error ? (
              <Message variant="danger">{error}</Message>
            ) : (
              <>
                {blogs.map((blog) => (
                  <SwiperSlide key={blog._id}>
                    <div className="swiper-slide slide">
                      <div className="image">
                        <img src={blog.image} alt="" />
                      </div>
                      <div className="content">
                        <div className="link">
                          <a href="#">by {blog.author}</a> <span>|</span>
                          <a href="#">{blog.createdAt.substring(0, 10)}</a>
                        </div>
                        <h3>{blog.title}</h3>
                        <p>{blog.description}</p>
                        <Link to={`/blogs/${blog._id}`} className="btn">
                          read more
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </>
            )}
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Blogs;
