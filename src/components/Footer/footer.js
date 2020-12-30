import React, { Component } from 'react';
import styles from './footer.module.css';
import {Link} from 'react-router-dom';
class footer extends Component {
    scrollTop = () => {
        window.scroll(0,0);
    }
    render() {
        return (
            <div className={styles.footer}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3">
                            <ul className={styles.list_footer}>
                                <h4 >Categories</h4>
                                <li className={styles.item_footer}>
                                    <Link
                                    onClick = {this.scrollTop}
                                    className={styles.link_footer} to="/iphone">Iphone</Link>
                                </li>
                                <li className={styles.item_footer}>
                                    <Link
                                    onClick = {this.scrollTop}
                                    className={styles.link_footer} to="/sony">Sony</Link>
                                </li>
                                <li className={styles.item_footer}>
                                    <Link
                                    onClick = {this.scrollTop}
                                    className={styles.link_footer} to="/samsung">Samsung</Link>
                                </li>
                                <li className={styles.item_footer}>
                                    <Link
                                    onClick = {this.scrollTop}
                                    className={styles.link_footer} to="/xiaomi"> Xioami</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-xl-3">
                            <ul className={styles.list_footer}>
                                <h4>BUY WITH US</h4>
                                <li className={styles.link_footer}>Services</li>
                                <li className={styles.link_footer}>Contact Us</li>
                                <li className={styles.link_footer}>FAQs</li>
                                <li className={styles.link_footer}>Privacy Policy</li>
                                <li className={styles.link_footer}>Cookie Policy</li>
                                <li className={styles.link_footer}>Terms and Conditions</li>
                            </ul>
                        </div>
                        <div className="col-xl-3">
                            <ul className={styles.list_footer}>
                                <h4>CONTACT</h4>
                                <li className={styles.item_footer}>Address : Binh Thanh Dist,Ho Chi Minh</li>
                                <li className={styles.item_footer}>Phone : +84 896728429</li>
                                <li className={styles.item_footer}>Hours : ALL WEEK FROM 7H30 AM TO 9H PM</li>
                                <li className={styles.item_footer}>Email : info@gmail.com</li>
                            </ul>
                        </div>
                        <div className="col-xl-3">
                            <ul className={styles.list_footer}>
                                <h4>NEWSLETTER SIGNUP</h4>
                                <li className={styles.item_footer}>Sign up for our e-mail and be the first who know our special offers! Furthermore, we will give a 15% discount on the next order after you sign up.</li>
                                <input type = "text" className = {styles.input} placeholder = "Enter your email"/>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default footer;