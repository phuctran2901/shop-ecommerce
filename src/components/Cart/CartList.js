import React, { Component } from 'react';
import styles from './cart.module.css';
class cardList extends Component {
    render() {
        return (
            <ul className={styles.cart_list}>
                {this.props.children}
            </ul>
        );
    }
}

export default cardList;