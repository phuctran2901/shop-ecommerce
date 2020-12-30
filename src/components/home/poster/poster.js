import React, { Component } from 'react';
import styles from './../../../pages/Home/HomePage.module.css';
import {IMG_POSTER, IMG_POSTER_2, IMG_POSTER_3} from './../../../constants/urlImg';
class poster extends Component {
    render() {
        return (
            <div className = "container">
                <div className= {styles.poster}>
                    <div className="row">
                        <div className="col-xl-4 col-md-12 col-12">
                            <div className={styles.wrapper_poster}>
                                <img src = {IMG_POSTER} className={styles.poster_img} alt = "poster 1"/>
                                <h4 className={styles.poster_title}>
                                    Apple / Iphone
                                </h4>
                                <p className={styles.poster_content}>
                                    Musk be on Mars
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-12 col-12">
                            <div className={styles.wrapper_poster}>
                                <img src = {IMG_POSTER_2} className={styles.poster_img} alt = "poster 2"/>
                                <h4 className={styles.poster_title}>SamSung / Galaxy</h4>
                                <p className={styles.poster_content}>New Trendy</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-12 col-12">
                            <div className={styles.wrapper_poster}>
                                <img src = {IMG_POSTER_3} className={styles.poster_img} alt = "poster 3"/>
                                <h4 className={styles.poster_title}>Vsmart / Active</h4>
                                <p className={styles.poster_content}>Lorem isua</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default poster;