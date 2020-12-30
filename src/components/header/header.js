import React, { Component } from 'react';
import Brand from './brand/brand';
import Menu from './menu/Menu';
import styles from './header.module.css'
class header extends Component {
    render() {
        return (
            <header className={`container-fluid elHeader ${styles.header}`}>
                <div className={` container`}>
                    <Brand/>
                    <Menu/>
                </div>
            </header>
        );
    }
}

export default header;