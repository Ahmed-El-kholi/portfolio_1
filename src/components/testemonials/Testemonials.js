import React from 'react'
import './testemonials.css'
import Avtr1 from '../../Assets/avatar1.jpg'
import Avtr2 from '../../Assets/avatar2.jpg'
import Avtr3 from '../../Assets/avatar3.jpg'
import Avtr4 from '../../Assets/avatar4.jpg'
// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testemonials = () => {
    return (
        <section id='testemoials'>
            <h5>Reviews from clients</h5>
            <h2>Testmonials</h2>
            <Swiper className='container testemonials_container'
                // install Swiper modules
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}

            >
                <SwiperSlide className='testemonial'>
                    <div className='client_avatar'>
                        <img src={Avtr1} alt='Avatar One' />
                    </div>
                    <h5>Erenst Achiver</h5>
                    <small className='client_reviewer'>
                        one of the important thing in th world is to know your self very good and know how to be make an correct effort.
                    </small>
                </SwiperSlide>
                <SwiperSlide className='testemonial'>
                    <div className='client_avatar'>
                        <img src={Avtr2} alt='Avatar One' />
                    </div>
                    <h5>Erenst Achiver</h5>
                    <small className='client_reviewer'>
                        one of the important thing in th world is to know your self very good and know how to be make an correct effort.
                    </small>
                </SwiperSlide>
                <SwiperSlide className='testemonial'>
                    <div className='client_avatar'>
                        <img src={Avtr3} alt='Avatar One' />
                    </div>
                    <h5>Erenst Achiver</h5>
                    <small className='client_reviewer'>
                        one of the important thing in th world is to know your self very good and know how to be make an correct effort.
                    </small>
                </SwiperSlide>
                <SwiperSlide className='testemonial'>
                    <div className='client_avatar'>
                        <img src={Avtr4} alt='Avatar One' />
                    </div>
                    <h5>Erenst Achiver</h5>
                    <small className='client_reviewer'>
                        one of the important thing in th world is to know your self very good and know how to be make an correct effort.
                    </small>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Testemonials