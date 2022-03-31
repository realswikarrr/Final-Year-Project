import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "./Main.css";

const ProductCarousel = () => {
  // const dispatch = useDispatch();

  // const productTopRated = useSelector((state) => state.productTopRated);
  // const { loading, error, products } = productTopRated;

  // useEffect(() => {
  //   dispatch(listTopProducts());
  // }, [dispatch]);

  //   return loading ? (
  //     <Loader />
  //   ) : error ? (
  //     <Message content={error} />
  //   ) : (
  //     <Carousel pause="hover" classNameNameName="bg-black">
  //       {products.map((product) => (
  //         <Carousel.Item key={product._id}>
  //           <Link to={`/products/${product._id}`}>
  //             <Image src={product.image} alt={product.name} fluid />
  //             <Carousel.Caption classNameNameName="carousel-caption">
  //               <h2>
  //                 {product.name} (${product.price})
  //               </h2>
  //             </Carousel.Caption>
  //           </Link>
  //         </Carousel.Item>
  //       ))}
  //     </Carousel>
  //   );
  // };

  return (
    <section className="home" id="home">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        grabCursor={true}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        centeredSlides={true}
        loop={true}
      >
        <div className="swiper home-slider">
          <div className="swiper-wrapper">
            <SwiperSlide>
              <div className="swiper-slide slide swiper-image_1">
                <div className="content">
                  <span>be strong, be fit</span>
                  <h3>Make yourself stronger than your excuses.</h3>
                  <a href="/register" className="btn">
                    get started
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide slide swiper-image_2">
                <div className="content">
                  <span>be strong, be fit</span>
                  <h3>Make yourself stronger than your excuses.</h3>
                  <a href="/register" className="btn">
                    get started
                  </a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="swiper-slide slide swiper-image_3">
                <div className="content">
                  <span>be strong, be fit</span>
                  <h3>Make yourself stronger than your excuses.</h3>
                  <a href="/register" className="btn">
                    get started
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </div>

          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </section>
  );
};

export default ProductCarousel;
