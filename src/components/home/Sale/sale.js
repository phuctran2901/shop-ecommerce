import React, { Component } from 'react';
import styles from './sale.module.css';
class sale extends Component {
    render() {
        return (
            <div className={styles.total_sale}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className={styles.total_sale_content}>TOTAL SALE: -50% for all Samsung!</div>
                        </div>
                        <div className="col-md-4">
                            <div className={styles.total_btn}>
                                <a className={`${styles.btn} ${styles.btn_block}`} href="/">Browse sale products
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default sale;