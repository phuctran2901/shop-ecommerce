import React, { Component } from 'react';
import styles from './menu.module.css';
import CartPages from './../../../pages/CartPages/CartPages';
import { Link, Route } from 'react-router-dom'
import { GiShoppingCart } from 'react-icons/gi';
import { AiOutlineUser } from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';
import { connect } from 'react-redux';
import { CgCloseR } from 'react-icons/cg';
import { FaBars, FaSignOutAlt } from 'react-icons/fa';
import { actIsLogin } from '../../../actions/index';
import fire from '../../../config/fire';
const menus = [
    {
        name: 'Home',
        to: '/',
        exact: true
    },
    {
        name: 'Iphone',
        to: '/iphone',
        exact: false
    },
    {
        name: 'Samsung',
        to: '/samsung',
        exact: false
    },
    {
        name: 'Xiaomi',
        to: '/xiaomi',
        exact: false
    },
    {
        name: 'Sony',
        to: '/sony',
        exact: false
    },
]

//Custom Link

const MenuLink = (({ label, to, activeOnlyWhenExact, isClick }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                var active = match ? styles.active : '';
                return (
                    <li onClick={isClick}
                        className={`${styles.nav_main_item} ${active}`}>
                        <Link to={to}>{label}</Link>
                    </li>
                )
            }}
        />
    )
})


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            isClick: false
        }
    }
    componentDidMount() {
        this.authListener();
    }
    authListener = () => {
        fire.auth().onAuthStateChanged((u) => {
            if (u) {
                var user = fire.auth().currentUser;
                var name = JSON.parse(localStorage.getItem('username'));
                if (user.displayName === null) {
                    user.updateProfile({
                        displayName: name
                    }).then(() => {
                        this.setState({
                            user
                        })
                        localStorage.removeItem('username')
                    })
                }
                else {
                    this.setState({ user })
                }
            }
            else {
                this.setState({
                    name: null,
                })
            }
        })
    }
    showMenus = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink
                        activeOnlyWhenExact={menu.exact}
                        to={menu.to}
                        path={menu.path}
                        key={index}
                        label={menu.name}
                        onClick={this.onClick}
                    />
                )
            })
        }
        return result;
    }
    onClick = () => {
        var { isClick } = this.state;
        this.setState({
            isClick: !isClick
        })
    }
    showAmountCart = (carts) => {
        var result = 0;
        if (carts.length > 0) {
            for (var i = 0; i < carts.length; i++) {
                result += Number(carts[i].amount);
            }
        }
        return result;
    }
    onScroll = () => {
        this.onClick();
        window.scroll(0,0);
    }
    logOut = () => {
        fire.auth().signOut().then(u => {
            this.setState({
                user: null
            })
            this.props.actIsLogin(false);
            localStorage.setItem('isLogin', false);
        });
        this.onClick();
    }
    render() {
        var { user, isClick } = this.state;
        var { cart } = this.props;
        return (
            <nav className={`${styles.navigation} `} >
                <span
                    onClick={this.onClick}
                    className={`${styles.wrapper_icon_bars} ${styles.hide_on_pc}`}>
                    <IconContext.Provider value={{ size: 30, color: 'white' }}>
                        <FaBars />
                    </IconContext.Provider>
                </span>
                <ul className={`${styles.nav_main} ${isClick ? styles.on_animated : ''}`}>
                    <span
                        onClick={this.onClick}
                        className={`${styles.icon_close} ${styles.show_on_moblie}`}>
                        <IconContext.Provider value={{ size: 50, color: '#EF524A' }}>
                            <CgCloseR />
                        </IconContext.Provider>
                    </span>
                    <div 
                    onClick = {this.onScroll}
                    className = {styles.flex}>
                        {this.showMenus(menus)}
                        {user ? <li
                            onClick={this.logOut}
                            style = {{cursor : 'pointer'}}
                            className={styles.nav_main_item}><FaSignOutAlt /><span>SignOut</span></li> : ''}
                    </div>
                </ul>
                <Link to="/">
                    <img className={`${styles.logo_moblie} ${styles.show_on_moblie}`} src="https://thebrandingstore.net/wp-content/uploads/2014/03/1236233_543435285709882_1139842131_n.png" alt="Logo" />
                </Link>
                <ul className={styles.nav_mini}>
                    <li className={styles.nav_mini_item}>
                        {user ? <div>
                            <span className={styles.user_name}><AiOutlineUser /> {user.displayName}</span>
                            <span
                                onClick={this.logOut}
                                className={styles.signout}><FaSignOutAlt /> Đăng xuất</span>
                        </div> : <Link style={{ textDecoration: 'none', color: "#FFF" }} to="/auth/signin"><span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><AiOutlineUser />Login/Register</span></Link>}
                    </li>
                    <li className={styles.nav_mini_item}>
                        <div className={styles.amount_cart}> {this.showAmountCart(cart)} </div>
                        <Link style={{ color: '#FFF', textDecoration: 'none' }} to="/check/cart">
                            <IconContext.Provider value={{ className: `${styles.nav_mini_icon}` }}>
                                <GiShoppingCart />
                            </IconContext.Provider>
                        </Link>
                        <div className={`${styles.wrapper_cart} ${styles.hide_on_moblie}`}>
                            <CartPages />
                        </div>
                    </li>
                </ul>
            </nav>
        );
    }
}

const mapStateToProps = state => {
    return {
        cart: state.Cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        actIsLogin: (boolean) => {
            dispatch(actIsLogin(boolean))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Menu);