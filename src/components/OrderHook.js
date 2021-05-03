import React, {useState} from 'react';
import PopupContent from './PopupContent';
import '../css/order.css';

function Order(){
  const [isShowPopup, setIsShowPopup] = useState(false);
  const [data, setData] = useState({});

  function openPopup(){
    window.history.pushState('popup-addr', '', '/popup-addr');
    setIsShowPopup( true );
  }

  const closePopup = (data) => {
    window.history.back();
    setIsShowPopup( false );
    setData(data);
  };

  window.onpopstate = (event) => {
    setIsShowPopup( false );
  }

  return (

  	<div className="order"> 

      <h2>Order</h2>

    	{ Object.keys(data).length > 0  && 
    		<div className="order-data">
      		<p>{data.addr}</p>
      		<p>{data.mobile}</p>
    		</div>
    	}

      <button onClick={openPopup}>Show Popup</button>

      { isShowPopup && 
      	<PopupContent onCloseButtonClick = {closePopup} />
      }

    </div>
  );
}

export default Order;