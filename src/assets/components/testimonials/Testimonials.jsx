import React from 'react'
import './testimonials.css'
import AVATAR1 from '../../avatar1.jpg'
import AVATAR2 from '../../avatar2.jpg'
import AVATAR3 from '../../avatar3.jpg'
import AVATAR4 from '../../avatar4.jpg'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    img: AVATAR3,
    name: 'Monkey.D.Luffy',
    review: 'Considers problems as a challenge and enjoy finding creative yet appropriate solutions. Obito is able to work out his own solutions, but also works well with a group to solve porblems'
  },
  {
    img: AVATAR2,
    
    name: 'Naruto Uzumaki',
    review: 'What a Design and Effects...well created ,all components are nicely made and is fully responsive in different size devices. Gradient Color combinaton is also good.A project well made by a new developer. '
  },
    
  {
    img: AVATAR1,
    name: 'Hinata Hyuga',
    review: 'Considers problems as a challenge and enjoy finding creative yet appropriate solutions. Obito is able to work out his own solutions, but also works well with a group to solve porblems'
  },
  {
    img: AVATAR4,
    name: 'Nezuko Kamado',
    review: 'Considers problems as a challenge and enjoy finding creative yet appropriate solutions. Obito is able to work out his own solutions, but also works well with a group to solve porblems'
  },
]

const Testimonials = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
  };
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper pagination={pagination} modules={[Pagination]} spaceBetween={40} slidesPerView={1} className="container testimonials_container mySwiper">
        {
          data.map(({ img, name, review }, count) => {
            return (
              <SwiperSlide key={count} className="testimonial">
                <div className="clint_img">
                  <img src={img} alt="AVATAR1" />
                </div>
                <h5 className="clint_name">{name}</h5>
                <small className="clint_review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
