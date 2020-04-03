import React, { Component } from "react";

class Product extends Component {
  render() {
    const {val} = this.props
    return (
      <div>
        <img src={val.img_url} />
        <p>{val.name}</p>
        <p>{val.price}</p>
      </div>
    );
  }
}

export default Product;