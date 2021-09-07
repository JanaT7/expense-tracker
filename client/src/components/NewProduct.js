import React from 'react';
import axios from 'axios';
import Header from './Header';


export class NewProduct extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          product_name: "",
          product_description: "",
          product_type: "",
          purchasedate: "",
          product_price: ""
      };
  };

  inputChangeHandler = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    });
};

submitHandler = (event) => {
    event.preventDefault();
    const product = {
        product_name: this.product_name,
        product_description: this.product_description,
        product_type: this.product_type,
        purchase_date: this.purchasedate,
        product_price: this.product_price
    };
    axios.post('/api/v1/product/create', { product })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        });
};

render () {
    return (

<div>   
  <Header/>     
<div className= 'container' id='inputs'>
        <form onSubmit = {this.submitHandler}>
        <label>
          Product Name
<br/>
          <input type="text" id="product_name" onChange = {this.inputChangeHandler} />
        </label>

        <label>
          Product Description
<br/>
          <input type="text" id="product_description" onChange = {this.inputChangeHandler}/>
        </label>


        <label>
          Product Type
<br/>
          <input type="text" id="product_type" onChange = {this.inputChangeHandler} />
        </label>


        <label>
          Purchase date
<br/>
        <input type="number" id="purchasedate" onChange = {this.inputChangeHandler}/> 
        </label>

        <label>
          Product price
<br/>
<input type="number" id="product_price" onChange = {this.inputChangeHandler}/>
        </label>


         <button className='button-createproduct'>CREATE PRODUCT</button>
      </form>
   
</div>

</div>


   )
}};
