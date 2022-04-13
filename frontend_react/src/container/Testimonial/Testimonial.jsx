import React from "react";
import "./Testimonial.scss";

import { images } from "../../constants";

import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { urlFor, client } from "../../client";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    client.fetch(query).then((data) => setTestimonials(data));
  }, []);

  return (
    <section id="testimonials">
      <h5>Review from clients and co-workers</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={{ clickable: true }}
      >
        {testimonials.map(({ _id, imageurl, name, testimonial }) => {
          const image = urlFor(imageurl.asset);
          return (
            <SwiperSlide key={_id} className="testimonial">
              <div className="client__avatar">
                <img src={image} alt="Avatar One" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{testimonial}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
