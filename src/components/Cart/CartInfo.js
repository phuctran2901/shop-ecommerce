import React, { Component } from 'react';
import styles from './cart.module.css';
import * as messenger from '../../constants/messenger';
import { toast } from 'react-toastify';
import { ImSad2 } from 'react-icons/im';
class CartInfor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: '',
            phone: '',
            messenger: '',
        };
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        })
    }
    onClick = () => {
        var { name, phone, address } = this.state;
        var { cart, history, isLogin } = this.props;
        var messName = document.querySelector('.name');
        var messPhone = document.querySelector('.phone');
        var messAddress = document.querySelector('.address');
        if (name === '' || phone === '' || address === '') {
            if (name === '') {
                messName.classList.remove(`${styles.hide}`);
            }
            else {
                messName.classList.add(`${styles.hide}`);
            }
            if (phone === '') {
                messPhone.classList.remove(`${styles.hide}`);
            }
            else {
                messName.classList.add(`${styles.hide}`);
            }
            if (address === '') {
                messAddress.classList.remove(`${styles.hide}`);
            } else {
                messName.classList.add(`${styles.hide}`);
            }
        }
        if (isLogin === true) {
            if (name && phone && address) {
                if (cart.length === 0) {
                    this.setState({
                        name: '',
                        phone: '',
                        address: '',
                        messenger: ''
                    })
                    toast.error(messenger.NO_PRODUCTS_IN_THE_CART, {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 1500
                    })
                }
                else {
                    this.props.onSubmitInfo({ info: this.state });
                    this.props.onResetCart();
                    this.setState({
                        name: '',
                        phone: '',
                        address: '',
                        messenger: ''
                    })
                    toast.success(messenger.PAY_SUCCESS, {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 1500
                    })
                    history.push('/');
                }
            }
        }
        else {
            if (name && phone && address) {
                toast.dark(<div><ImSad2 />{messenger.IS_LOGIN}</div>, {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 1500
                })
            }
        }
    }
    render() {
        var { totalPrice } = this.props;
        return (
            <div>
                <div className="form-group " style={{ backgroundColor: 'white', padding: 20 }}>
                    <h3>Your Info</h3>
                    <br />
                    <input
                        onChange={this.onChange}
                        type="text"
                        name="name"
                        className="form-control"
                        value={this.state.name}
                        placeholder="Your Name"
                        aria-describedby="helpId" />
                    <small id="helpId" className={`text-muted name ${styles.hide}`} style={{ color: 'red' }}>Vui lòng nhập tên của bạn...</small>
                    <br />
                    <input
                        onChange={this.onChange}
                        type="number"
                        className="form-control"
                        value={this.state.phone}
                        name="phone"
                        placeholder="Your Phone..."
                        aria-describedby="helpId" />
                    <small id="helpId" className={`text-muted phone ${styles.hide}`} style={{ color: 'red' }}>Vui lòng nhập số điện thoại...</small>
                    <br />
                    <input
                        onChange={this.onChange}
                        value={this.state.address}
                        type="text"
                        name="address"
                        className="form-control"
                        placeholder="Your address..."
                        aria-describedby="helpId" />
                    <small id="helpId" className={`text-muted address ${styles.hide}`} style={{ color: 'red' }}>Vui lòng nhập địa chỉ...</small>
                    <br />
                    <textarea
                        onChange={this.onChange}
                        className="form-control messenger"
                        name='messenger'
                        rows="4"
                        placeholder="Your messages"></textarea>
                    <div className={styles.cart_info_price}>
                        <span>Total:</span>
                        <span>{`$ ${totalPrice}`}</span>
                    </div>
                </div>
                <button
                    onClick={this.onClick}
                    type="button"
                    className="btn btn-danger"
                    style={{ width: '100%' }}>Proceed To Othering</button>
            </div>
        );
    }
}

export default CartInfor;