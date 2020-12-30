import React, { Component } from 'react';
import { Swiper } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';


SwiperCore.use([Navigation], [Pagination], [Autoplay]);


class arrival extends Component {
    render() {
        return (
                <Swiper
                    tag="ul"
                    spaceBetween={25}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    loop={true}
                    autoplay = {
                        true
                    }
                    breakpoints={{
                        1024: {
                            slidesPerView: 4,
                        },
                        768: {
                            slidesPerView: 3
                        }
                    }}
                >
                    {this.props.children}
                </Swiper>
        );
    }
}

export default (arrival);