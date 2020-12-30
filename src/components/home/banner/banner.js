import React, { Component } from 'react';
import { GrCaretPrevious, GrCaretNext } from 'react-icons/gr';
import Carousel from 'react-bootstrap/Carousel'
import styles from './../../../pages/Home/HomePage.module.css';
import * as slide from './../../../constants/urlImg';
class banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prevIcon: <GrCaretPrevious className={styles.icon_prev} />,
            nextIcon: <GrCaretNext className={styles.icon_next} />
        };
    }
    render() {
        var { prevIcon, nextIcon } = this.state;
        return (
            <Carousel className={styles.h_100} nextIcon={nextIcon} prevIcon={prevIcon} refs={this.wrapper}>
                <Carousel.Item className={styles.h_100} interval={20000}>
                    <img
                        className="d-block w-100"
                        src={slide.SLIDE_1}
                        alt="First slide"

                    />
                </Carousel.Item>
                <Carousel.Item className={styles.h_100} interval={2000000000000}>
                    <img
                        className="d-block w-100"
                        src={slide.SLIDE_2}
                        alt="Third slide"
                    />
                </Carousel.Item >
                <Carousel.Item className={styles.h_100} interval={20000}>
                    <img
                        className="d-block w-100"
                        src={slide.SLIDE_3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default banner;