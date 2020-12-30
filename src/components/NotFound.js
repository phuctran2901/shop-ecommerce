import React, { Component } from 'react';
import styles from './NotFound.module.css';
import {Link} from 'react-router-dom';
class NotFound extends Component {
    render() {
        return (
            <div className={styles.notfound_id}>
                <div className= {styles.notfound}>
                    <div className={styles.notfound_404}>
                        <h1 className={styles.notfound_title}>Oops!</h1>
                        <h2 className ={styles.notfound_content}>404 - The Page can't be found</h2>
                    </div>
                    <Link className={styles.notfound_button} to = "/">Go TO Homepage</Link>
                </div>
            </div>
        );
    }
}

export default NotFound;