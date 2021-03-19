import React from "react";

const Dropdown = () => {
  return (
    <div className="ui menu">
      <a className="item">Home</a>
      <div className="ui pointing dropdown inverted link item">
        <span className="text">Shopping</span>
        <i className="dropdown icon"></i>
        <div className="menu">
          <div className="header">Categories</div>
          <div className="item">
            <i className="dropdown icon"></i>
            <span className="text">Clothing</span>
            <div className="menu">
              <div className="header">Mens</div>
              <div className="item">Shirts</div>
              <div className="item">Pants</div>
              <div className="item">Jeans</div>
              <div className="item">Shoes</div>
              <div className="divider"></div>
              <div className="header">Womens</div>
              <div className="item">Dresses</div>
              <div className="item">Shoes</div>
              <div className="item">Bags</div>
            </div>
          </div>
          <div className="item">Home Goods</div>
          <div className="item">Bedroom</div>
          <div className="divider"></div>
          <div className="header">Order</div>
          <div className="item">Status</div>
          <div className="item">Cancellations</div>
        </div>
      </div>
      <a className="item">Forums</a>
      <a className="item">Contact Us</a>
    </div>
  );
};

export default Dropdown;
