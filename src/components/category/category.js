import React, { Component } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { IconContext } from 'react-icons';
import { AiFillStar, AiOutlineStar, AiOutlineBars } from 'react-icons/ai';
import { CgCloseR } from 'react-icons/cg';
import styles from './../../pages/PagesProduct/PagesProduct.module.css';
class category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
            isClick: false,
        };
    }
    onFilterProduct = (price, rating) => {
        this.props.onFilterProduct(price, rating);
        this.onClick();
    }
    onClick = () => {
        var { isClick } = this.state;
        this.setState({
            isClick: !isClick
        })
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        }, () => {
            this.props.onFilterProduct('', '', this.state.keyword);
        })
    }
    render() {
        var { isClick } = this.state;
        return (
            <div>
                {isClick ? '' : <span onClick={this.onClick} className={`${styles.icon} ${styles.hide_on_pc}`}>
                    <IconContext.Provider value={{ className: `${styles.bars}` }}>
                        <AiOutlineBars />
                    </IconContext.Provider>
                </span>}
                <div>
                    <div className={`${styles.category_search} ${isClick ? styles.on_animated : ''}`}>
                        <span onClick={this.onClick} className={`${styles.close_icon} ${styles.show_on_moblie}`}>
                            <IconContext.Provider value={{ color: 'red', size: 30 }}>
                                <CgCloseR />
                            </IconContext.Provider>
                        </span>
                        <div className={styles.category_wrapper}>
                            <p className={styles.category_title}>Search</p>
                            <input
                                type="text"
                                name="keyword"
                                className={styles.search_input}
                                placeholder="Search Products..."
                                value={this.state.keyword}
                                onChange={this.onChange}
                            />
                            <IconContext.Provider value={{ className: `${styles.search_icon}` }}>
                                <BiSearchAlt />
                            </IconContext.Provider>
                        </div>
                        <ul className={styles.category_search_list}>
                            <li className={styles.category_search_item}>
                                <p className={styles.category_search_title}>
                                    GIÁ TIỀN
                                    </p>
                                <ul className={styles.search_price_list}>
                                    <li
                                        className={styles.search_price_item}
                                        onClick={() => this.onFilterProduct(1, '')}
                                    >Trên 100$</li>
                                    <li
                                        className={styles.search_price_item}
                                        onClick={() => this.onFilterProduct(2, '')}
                                    >Dưới 100$</li>
                                </ul>
                            </li>
                            <li className={styles.category_search_item}>
                                <p className={styles.category_search_title}>
                                    ĐÁNH GIÁ
                                         </p>
                                <ul className={styles.search_rating_list}>
                                    <li
                                        className={styles.search_rating_item}
                                        onClick={() => this.onFilterProduct('', 5)}
                                    >
                                        <IconContext.Provider value={{ size: 15 }}>
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                        </IconContext.Provider>
                                    </li>
                                    <li
                                        className={styles.search_rating_item}
                                        onClick={() => this.onFilterProduct('', 4)}
                                    >
                                        <IconContext.Provider value={{ size: 15 }}>
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiOutlineStar />
                                        </IconContext.Provider>
                                    </li>
                                    <li
                                        className={styles.search_rating_item}
                                        onClick={() => this.onFilterProduct('', 3)}
                                    >Dưới 3 sao</li>
                                </ul>
                                <button
                                    className={styles.btn_reset}
                                    onClick={() => this.onFilterProduct(0, 0)}
                                >
                                    Reset
                                        </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default category;