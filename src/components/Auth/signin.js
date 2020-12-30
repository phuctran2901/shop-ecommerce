import React, { Component } from 'react';
import styles from './auth.module.css';
import fire from '../../config/fire';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { LOGIN_SUCCESS, FAILED_LOGIN } from '../../constants/messenger';
import { connect } from 'react-redux';
import { actIsLogin } from '../../actions/index';
class signin extends Component {
    signin = () => {
        var { history } = this.props;
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        const spinnerLoading = document.querySelector('.loading');
        const helpText = document.querySelector('.help');
        spinnerLoading.classList.add('spinner-border');
        spinnerLoading.classList.add('spinner-border-sm');
        fire.auth().signInWithEmailAndPassword(email, password).then((u) => {
            if(u) {
                history.push('/');
                toast.info(LOGIN_SUCCESS, {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 1500
                })
                this.props.actIsLogin(true);
                localStorage.setItem('isLogin', true);
                spinnerLoading.classList.remove('spinner-border');
                spinnerLoading.classList.remove('spinner-border-sm');
                helpText.innerHTML = "";
            }
        }).catch((err) => {
            if (err) {
                spinnerLoading.classList.remove('spinner-border');
                spinnerLoading.classList.remove('spinner-border-sm');
                helpText.innerHTML = `${FAILED_LOGIN}`;
            }
        })
    }
    render() {
        return (
            <div className={`container ${styles.p_50}`}>
                <h3 style={{ textAlign: 'center' }}>Đăng nhập</h3>
                <div className={styles.wrapper_form}>
                    <div className="form-group">
                        <div className={styles.flex}>
                            <span>Email:</span>
                            <input type="text" className="form-control" id="email" aria-describedby="helpId" />
                        </div>
                        <small className={`${styles.help_text} help`}></small>
                        <div className={styles.flex}>
                            <span>Password:</span>
                            <input type="password" className="form-control" id="password" />
                        </div>
                    </div>
                    <span
                        onClick={this.signin}
                        className={`btn btn-primary ${styles.btn_form}`}>
                        <span className="loading"></span>
                        Login
                        </span>
                    <br />
                    <br />
                    <p className={styles.link}>Or</p>
                    <Link to="/auth/signup">Register</Link>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        actIsLogin: (boolean) => {
            dispatch(actIsLogin(boolean));
        }
    }
}
export default connect(null, mapDispatchToProps)(signin);