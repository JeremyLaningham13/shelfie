import React from "react";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inventory: [{
          name: 'shirt',
          price: '$30.00',
          img_url: 'https://res.cloudinary.com/teepublic/image/private/s--ksqS48SR--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_470/c_crop,g_north_west,h_626,w_470,x_0,y_0/g_north_west,u_upload:v1462829013:production:blanks:cau9y2yr6rnvk9qkrf1h,x_-395,y_-325/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1554813541/production/designs/4603569_0.jpg'
      }]
  }
}

componentDidMount() {
  axios.get('/api/inventory')
  .then(response => {
    this.setState({inventory: response.data})
  }).catch(error => {
    console.log(error)
  })
}

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard  inventory={this.state.inventory}/>
        <Form />
      </div>
    );
  }
}

export default App;
