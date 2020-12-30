import React, { Component } from 'react';
import fire from './../../config/fire';
import styles from './auth.module.css';
import { Link } from 'react-router-dom';
import { actIsLogin } from '../../actions';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import * as messenger from '../../constants/messenger';
class signup extends Component {
    validationForm = (email, password, username, confirmPassword) => {
        var result = false;
        var isEmail = false;
        var isPassword = false;
        var isConfirmPassword = false;
        var isUsername = false;
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; // validation email
        const helpEmail = document.querySelector('#helpEmail');
        const helpPassword = document.querySelector('#helpPassword');
        const helpConfirmPassword = document.querySelector('#helpConfirmPassword');
        const helpUsername = document.querySelector('#helpUsername');
        if (email) {
            if (email.match(mailformat)) { // check xem phải là @gmail.com
                isEmail = true;
                helpEmail.innerHTML = '';
            } else {
                isEmail = false;
                helpEmail.innerHTML = `${messenger.CHECK_EMAIL}`;
            }
        }
        else {
            isEmail = false;
            helpEmail.innerHTML = `${messenger.WARN_EMAIL}`;
        }
        if (password.length >= 6) {
            isPassword = true;
            helpPassword.innerHTML = '';
        } else {
            isPassword = false;
            helpPassword.innerHTML = `${messenger.WARN_PASSWORD}`;
        }
        if (confirmPassword === password) {
            isConfirmPassword = true;
            helpConfirmPassword.innerHTML = '';
        } else {
            isConfirmPassword = false;
            helpConfirmPassword.innerHTML = `${messenger.CONFIRM_PASSWORD}`;
        }
        if (username) {
            if (username.length > 6) {
                isUsername = true;
                helpUsername.innerHTML = '';
            } else {
                isUsername = false;
                helpUsername.innerHTML = `${messenger.WARN_USERNAME_2}`;
            }
        } else {
            isUsername = false;
            helpUsername.innerHTML = `${messenger.WARN_USERNAME}`;
        }
        if (isPassword && isConfirmPassword && isUsername && isEmail) {
            result = true;
        }
        else {
            result = false;
        }
        return result;
    }
    signUp = () => {
        let { history } = this.props;
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        const username = document.querySelector('#username').value;
        const confirmPassword = document.querySelector('#confirmPassword').value;
        const spinnerLoading = document.querySelector('.loading');
        const helpEmail = document.querySelector('#helpEmail');
        if (this.validationForm(email, password, username, confirmPassword)) {
            spinnerLoading.classList.add('spinner-border');
            spinnerLoading.classList.add('spinner-border-sm');
            fire.auth().createUserWithEmailAndPassword(email, password).then(u => {
                localStorage.setItem('isLogin', true);
                this.props.actIsLogin(true);
                localStorage.setItem('username', JSON.stringify(username));
                toast.info(messenger.REGISTER_SUCCESS, {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 1500
                });
                spinnerLoading.classList.remove('spinner-border');
                spinnerLoading.classList.remove('spinner-border-sm');
                helpEmail.innerHTML = '';
                history.push('/');
            }).catch(err => {
                toast.warn(messenger.FAILED_REGISTER, {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 1500
                })
                spinnerLoading.classList.remove('spinner-border');
                spinnerLoading.classList.remove('spinner-border-sm');
                helpEmail.innerHTML = `${messenger.ACCOUNT_REGISTER_USED}`;
            })
        }
    }
    render() {
        return (
            <div className={`container ${styles.p_50}`}>
                <h3 style={{ textAlign: 'center' }}>Đăng ký</h3>
                <div className={styles.wrapper_form}>
                    <div className="form-group">
                        <div className={styles.flex}>
                            <span>Email:</span>
                            <input type="text" className="form-control" id="email" />
                        </div>
                        <small id="helpEmail" className={`${styles.help_text}`}></small>
                        <div className={styles.flex}>
                            <span>Password:</span>
                            <input type="password" className="form-control" id="password" />
                        </div>
                        <small id="helpPassword" className={`${styles.help_text}`}></small>
                        <div className={styles.flex}>
                            <span>Confirm Password:</span>
                            <input type="password" className="form-control" id="confirmPassword" />
                        </div>
                        <small id="helpConfirmPassword" className={`${styles.help_text}`}></small>
                        <div className={styles.flex}>
                            <span>UserName :</span>
                            <input type="text" className="form-control" id="username" />
                        </div>
                        <small id="helpUsername" className={`${styles.help_text}`}></small>
                        <br />
                    </div>
                    <span
                        onClick={this.signUp}
                        className={`btn btn-primary ${styles.btn_form}`} >
                        <span className="loading"></span>
                            Register
                            </span>
                    <br />
                    <br />
                    <p className={styles.link}>Or</p>
                    <Link to="/auth/signin">Login</Link>
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

export default connect(null, mapDispatchToProps)(signup);