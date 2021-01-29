import React from 'react';
import PopupContent from './PopupContent';
import './order.css';


class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	isShowPopup: false,
    	data : {}
    };

    this.handlePopup = this.handlePopup.bind(this);
    this.handlePopupClose = this.handlePopupClose.bind(this);
  }

  handlePopup() {
    this.setState(state => ({
      isShowPopup: !state.isShowPopup
    }));
  }

  handlePopupClose = ( data ) => {
  	this.handlePopup();
  	this.setState({
  		data: data
  	}, function(){
  		console.log(this.state.data);
  	});
  }

  render() {
    return (
    	<div className="order">
      	<h2>Order</h2>
      	
      	{ Object.keys(this.state.data).length > 0  && 
      		<div className="order-data">
        		<p>{this.state.data.addr}</p>
        		<p>{this.state.data.mobile}</p>
      		</div>
      	}
      	
	      <button onClick={this.handlePopup}>Show Popup</button>
	      {this.state.isShowPopup && 
	      	<PopupContent onCloseButtonClick = {this.handlePopupClose} />
	      }
      </div>
    );
  }
}

export default Order;