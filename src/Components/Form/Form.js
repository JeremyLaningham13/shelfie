import React, { Component } from "react";
import axios from "axios";

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      price: '',
      img_url: ''
    }
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleClick = () => {
    const {name, price, img_url} = this.state;
    axios.post('/api/shelfie', {
      name,
      price,
      img_url
    }).then(response => {
      this.setState({
        name: '',
        price:'',
        img_url: ''
      })
    }).catch(error => {
      console.log(error)
    })
  }

  render() {
    const {name, price, img_url} = this.state;
    return (
      <div className = 'Form'>
        <h1>Form</h1>
        <nav className = 'formGroup'>
        <input className = 'addToForm' type = 'text' placeholder = 'Img URL' onChange={this.handleChange} name='img' value={img_url}/>
        <input className = 'addToForm' type = 'text' placeholder = 'Name' onChange={this.handleChange} name='name' value={name}/>
        <input className = 'addToForm' type = 'text' placeholder = 'Price' onChange={this.handleChange} name='price' value={price}/>
        </nav>
        <button className = 'cancelBttn' onClick={this.handleClick}>Cancel</button>
        <button className = 'addBttn' onClick={this.handleClick}>Add To Inventory</button>
      </div>
    );
  }
}

export default Form;
