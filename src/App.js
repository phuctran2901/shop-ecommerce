import React, { Component } from 'react';
import './style.css';
import Header from './components/header/header';
import routes from './router';
import * as actions from './actions/index';
import { connect } from 'react-redux';
import Footer from './components/Footer/footer';
import { ToastContainer } from 'react-toastify';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }
    componentDidMount() {
        this.props.onFetchProducts();
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 3000)
    }
    showContentMenus = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                );
            })
        }
        return (<Switch>
            {result}
        </Switch>);
    }

    render() {
        return (
            <div className={`${this.state.isLoading ? 'pre_loader' : ''}`}>
                <div className={`${this.state.isLoading ? 'loader' : ''}`}>
                    {this.state.isLoading ? '' :
                        <Router>
                            <div>
                                <Header />
                                {this.showContentMenus(routes)}
                                <ToastContainer />
                                <Footer />
                            </div>
                        </Router>
                    }
                </div>
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch, props) => {
    return {
        onFetchProducts: () => {
            dispatch(actions.actFetchProductsRequest())
        },
    }

}

export default connect(null, mapDispatchToProps)(App);


