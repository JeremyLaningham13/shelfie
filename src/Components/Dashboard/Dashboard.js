import React, { Component } from "react";
import Product from "../Product/Product";

class Dashboard extends Component {
  render() {
    let mappedInventory = this.props.inventory.map((val) => {
      return <Product val={val} />;
    });
    return (
      <div>
        <h1>Dashboard</h1>
        {mappedInventory}
      </div>
    );
  }
}

export default Dashboard;
