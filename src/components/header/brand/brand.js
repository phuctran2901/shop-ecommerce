import React, { Component } from 'react';
import { IconContext } from 'react-icons';
import { AiFillClockCircle } from 'react-icons/ai';
import { GiSmartphone } from 'react-icons/gi'; 
import  styles from './brand.module.css';
class brand extends Component {
    render() {
        return (
            <IconContext.Provider value={{ className: `${styles.icon}`}} >
                <div className={`${styles.branding} ${styles.hide_on_moblie} `}>
                    <div className={`${styles.branding_hour}`}>
                        <span className={styles.mr_10}>
                            <AiFillClockCircle />
                        </span>
                        <span className={`${styles.hour}` }>
                            <p>Mon - Fri: 8h:00 - 19h:00</p>
                            <p>Sat, Sun: 9h:00 - 18h:00</p>
                        </span>
                    </div>
                    <div className={styles.branding_logo}>
                        <img src="https://thebrandingstore.net/wp-content/uploads/2014/03/1236233_543435285709882_1139842131_n.png" alt="" />
                    </div>
                    <div className={`${styles.branding_contact}`}>
                        <GiSmartphone />
                        <span>
                            <p>001-234-5679</p>
                            <p>001-987-6543</p>
                        </span>
                    </div>
                </div>
            </IconContext.Provider >
        );
    }
}

export default brand;