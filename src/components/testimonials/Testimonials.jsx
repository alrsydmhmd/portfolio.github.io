import React from "react";
import './testimonials.css'
import Avt1 from '../../assets/din.JPG'
import Avt2 from '../../assets/beh.JPG'
import Avt3 from '../../assets/amaa.JPG'
import Avt4 from '../../assets/tiey.JPG'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        avatar: Avt1,
        name: 'M Aldin Ali Ilham',
        review: 'Web Portfolio ini di desain sangat rapih, sehingga bisa menarik banyak client yang ingin mempunyai Web Portfolio ini. Saya sebagai client berterima kasih kepada developer Muhamad Zamzam Alrasyd karena telah bekerja dengan baik.'
    },
    {
        avatar: Avt2,
        name: 'Muhammad Ardiansyah',
        review: 'Web Portfolio ini di desain sangat rapih, sehingga bisa menarik banyak client yang ingin mempunyai Web Portfolio ini. Saya sebagai client berterima kasih kepada developer Muhamad Zamzam Alrasyd karena telah bekerja dengan baik.'
    },
    {
        avatar: Avt3,
        name: 'Rahmadina Ariyanti',
        review: 'Web Portfolio ini di desain sangat rapih, sehingga bisa menarik banyak client yang ingin mempunyai Web Portfolio ini. Saya sebagai client berterima kasih kepada developer Muhamad Zamzam Alrasyd karena telah bekerja dengan baik.'
    },
    {
        avatar: Avt4,
        name: 'Muthia Rahmah',
        review: 'Web Portfolio ini di desain sangat rapih, sehingga bisa menarik banyak client yang ingin mempunyai Web Portfolio ini. Saya sebagai client berterima kasih kepada developer Muhamad Zamzam Alrasyd karena telah bekerja dengan baik.'
    }
]

const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>Review From Clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials__container"
             // install Swiper modules
                modules={[ Pagination ]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}>
                {
                    data.map(({avatar, name, review}, index) => {
                        return (
                            <SwiperSlide key={index} className="testimonial">
                                <div className="client__avatar">
                                    <img src={avatar} />
                                </div>
                                <h5 className="client__name">{name}</h5>
                                <small className="client__review">{review}</small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Testimonials