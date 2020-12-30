import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './../../pages/PagesProduct/PagesProduct.module.css';
class NavigationBar extends Component {
    render() {
        var { match } = this.props;
        var mess = match.params.trademark ? match.params.trademark : match.params.name;
        var messUpperCase = mess.charAt(0).toUpperCase() + mess.slice(1); // Viết hoa chữ cái đầu tiên
        return (
            <div style={{ margin: 0, padding: 0 }}>
                <div className={styles.messenger}>
                    <div className={styles.messenger_left}>
                        <Link className={styles.btn_messenger} to='/'>Home/</Link>
                        <span className={styles.messenger_content}>
                            {messUpperCase}
                        </span>
                    </div>
                    <div className={styles.messenger_right}>
                        {messUpperCase}
                    </div>
                </div>
            </div>
        );
    }
}

export default NavigationBar;