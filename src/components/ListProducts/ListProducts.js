import React, { Component } from 'react';
class ListProducts extends Component {
    render() {
        return (
            <div className="row no-gutters" >
                {this.props.children}
            </div>
        );
    }
}

export default ListProducts;