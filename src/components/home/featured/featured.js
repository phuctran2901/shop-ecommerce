import React, { Component } from 'react';
import { Swiper } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { GiNorthStarShuriken } from 'react-icons/gi';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import styles from './../../../pages/Home/HomePage.module.css';

SwiperCore.use([Navigation], [Pagination], [Autoplay]);


class featured extends Component {
    render() {
        var { match } = this.props;
        return (
            <section className={`container ${styles.p_50}`}>
                <div className={styles.title_featured}>
                    <span className={styles.featured_heading}>{match ? 'Related Products': 'Featured Products'}</span>
                    <span className={styles.featured_icon}><GiNorthStarShuriken /></span>
                </div>
                <Swiper
                    tag="ul"
                    spaceBetween={25}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    loop={true}
                    autoplay={
                        {
                            delay : 2.5
                        }
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
            </section>
        );
    }
}

export default (featured);