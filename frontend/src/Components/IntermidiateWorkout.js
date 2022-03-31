import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import "swiper/css";

const IntermidiateWorkout = () => {
  return (
    <section>
      <h1 className="heading">
        <span>Intermediate</span>
      </h1>

      <Swiper
        spaceBetween={20}
        grabCursor={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          991: { slidesPerView: 3 },
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
      >
        <SwiperSlide>
          <div class="workout__container">
            <div class="workout-info">
              <h1>Sunday</h1>
              <h2 style={{ textAlign: "center", color: "#f00" }}>Chest Day</h2>
              <ul>
                <li>
                  <h2>Cable Fly</h2>
                  <h2>
                    2 <small>set</small> <i class="fas fa-arrow-right"></i> 50{" "}
                    <small>kg</small> <i class="fas fa-times"></i> 15{" "}
                    <small>reps</small>
                  </h2>
                  <h2>Bench Press</h2>
                  <h2>
                    2 <small>set</small> <i class="fas fa-arrow-right"></i> 50{" "}
                    <small>kg</small> <i class="fas fa-times"></i> 15{" "}
                    <small>reps</small>
                  </h2>
                  <h2>Incline Press</h2>
                  <h2>
                    2 <small>set</small> <i class="fas fa-arrow-right"></i> 50{" "}
                    <small>kg</small> <i class="fas fa-times"></i> 15{" "}
                    <small>reps</small>
                  </h2>
                  <h2>Decline Press</h2>
                  <h2>
                    2 <small>set</small> <i class="fas fa-arrow-right"></i> 50{" "}
                    <small>kg</small> <i class="fas fa-times"></i> 15{" "}
                    <small>reps</small>
                  </h2>
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="workout__container">
            <div class="workout-info">
              <h1>Monday</h1>
              <h2 style={{ textAlign: "center", color: "#f00" }}>Bicep Day</h2>
              <ul>
                <li>
                  <h2>Cable Fly</h2>
                  <h2>
                    2 <small>set</small> <i class="fas fa-arrow-right"></i> 50{" "}
                    <small>kg</small> <i class="fas fa-times"></i> 15{" "}
                    <small>reps</small>
                  </h2>
                  <h2>Bench Press</h2>
                  <h2>
                    2 <small>set</small> <i class="fas fa-arrow-right"></i> 50{" "}
                    <small>kg</small> <i class="fas fa-times"></i> 15{" "}
                    <small>reps</small>
                  </h2>
                  <h2>Incline Press</h2>
                  <h2>
                    2 <small>set</small> <i class="fas fa-arrow-right"></i> 50{" "}
                    <small>kg</small> <i class="fas fa-times"></i> 15{" "}
                    <small>reps</small>
                  </h2>
                  <h2>Decline Press</h2>
                  <h2>
                    2 <small>set</small> <i class="fas fa-arrow-right"></i> 50{" "}
                    <small>kg</small> <i class="fas fa-times"></i> 15{" "}
                    <small>reps</small>
                  </h2>
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="workout__container">
            <div class="workout-info">
              <h1>Tuesday</h1>
              <h2 style={{ textAlign: "center", color: "#f00" }}>Tricep Day</h2>
              <ul>
                <li>
                  <h2>Cable Fly</h2>
                  <h2>
                    2 <small>set</small> <i class="fas fa-arrow-right"></i> 50{" "}
                    <small>kg</small> <i class="fas fa-times"></i> 15{" "}
                    <small>reps</small>
                  </h2>
                  <h2>Bench Press</h2>
                  <h2>
                    2 <small>set</small> <i class="fas fa-arrow-right"></i> 50{" "}
                    <small>kg</small> <i class="fas fa-times"></i> 15{" "}
                    <small>reps</small>
                  </h2>
                  <h2>Incline Press</h2>
                  <h2>
                    2 <small>set</small> <i class="fas fa-arrow-right"></i> 50{" "}
                    <small>kg</small> <i class="fas fa-times"></i> 15{" "}
                    <small>reps</small>
                  </h2>
                  <h2>Decline Press</h2>
                  <h2>
                    2 <small>set</small> <i class="fas fa-arrow-right"></i> 50{" "}
                    <small>kg</small> <i class="fas fa-times"></i> 15{" "}
                    <small>reps</small>
                  </h2>
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="workout__container">
            <div class="workout-info">
              <h1>Wednesday</h1>
              <h2 style={{ textAlign: "center", color: "#f00" }}>
                Shoulder Day
              </h2>
              <ul>
                <li>
                  <h2>Cable Fly</h2>
                  <h2>
                    2 <small>set</small> <i class="fas fa-arrow-right"></i> 50{" "}
                    <small>kg</small> <i class="fas fa-times"></i> 15{" "}
                    <small>reps</small>
                  </h2>
                  <h2>Bench Press</h2>
                  <h2>
                    2 <small>set</small> <i class="fas fa-arrow-right"></i> 50{" "}
                    <small>kg</small> <i class="fas fa-times"></i> 15{" "}
                    <small>reps</small>
                  </h2>
                  <h2>Incline Press</h2>
                  <h2>
                    2 <small>set</small> <i class="fas fa-arrow-right"></i> 50{" "}
                    <small>kg</small> <i class="fas fa-times"></i> 15{" "}
                    <small>reps</small>
                  </h2>
                  <h2>Decline Press</h2>
                  <h2>
                    2 <small>set</small> <i class="fas fa-arrow-right"></i> 50{" "}
                    <small>kg</small> <i class="fas fa-times"></i> 15{" "}
                    <small>reps</small>
                  </h2>
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="workout__container">
            <div class="workout-info">
              <h1>Thursday</h1>
              <h2 style={{ textAlign: "center", color: "#f00" }}>Back Day</h2>
              <ul>
                <li>
                  <h2>Cable Fly</h2>
                  <h2>
                    2 <small>set</small> <i class="fas fa-arrow-right"></i> 50{" "}
                    <small>kg</small> <i class="fas fa-times"></i> 15{" "}
                    <small>reps</small>
                  </h2>
                  <h2>Bench Press</h2>
                  <h2>
                    2 <small>set</small> <i class="fas fa-arrow-right"></i> 50{" "}
                    <small>kg</small> <i class="fas fa-times"></i> 15{" "}
                    <small>reps</small>
                  </h2>
                  <h2>Incline Press</h2>
                  <h2>
                    2 <small>set</small> <i class="fas fa-arrow-right"></i> 50{" "}
                    <small>kg</small> <i class="fas fa-times"></i> 15{" "}
                    <small>reps</small>
                  </h2>
                  <h2>Decline Press</h2>
                  <h2>
                    2 <small>set</small> <i class="fas fa-arrow-right"></i> 50{" "}
                    <small>kg</small> <i class="fas fa-times"></i> 15{" "}
                    <small>reps</small>
                  </h2>
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="workout__container">
            <div class="workout-info">
              <h1>Friday</h1>
              <h2 style={{ textAlign: "center", color: "#f00" }}>Leg Day</h2>
              <ul>
                <li>
                  <h2>Cable Fly</h2>
                  <h2>
                    2 <small>set</small> <i class="fas fa-arrow-right"></i> 50{" "}
                    <small>kg</small> <i class="fas fa-times"></i> 15{" "}
                    <small>reps</small>
                  </h2>
                  <h2>Bench Press</h2>
                  <h2>
                    2 <small>set</small> <i class="fas fa-arrow-right"></i> 50{" "}
                    <small>kg</small> <i class="fas fa-times"></i> 15{" "}
                    <small>reps</small>
                  </h2>
                  <h2>Incline Press</h2>
                  <h2>
                    2 <small>set</small> <i class="fas fa-arrow-right"></i> 50{" "}
                    <small>kg</small> <i class="fas fa-times"></i> 15{" "}
                    <small>reps</small>
                  </h2>
                  <h2>Decline Press</h2>
                  <h2>
                    2 <small>set</small> <i class="fas fa-arrow-right"></i> 50{" "}
                    <small>kg</small> <i class="fas fa-times"></i> 15{" "}
                    <small>reps</small>
                  </h2>
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default IntermidiateWorkout;
