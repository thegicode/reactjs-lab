import React, {useState} from 'react';
import PopupContent from './PopupContent';
import './order.css';

function Order(){
  const [isShowPopup, setIsShowPopup] = useState(false);
  const [data, setData] = useState({});

  function handlePopup(){
    setIsShowPopup(!isShowPopup);
  }

  const handlePopupClose = (data) => {
  	handlePopup();
    setData(data);
    // console.log('data', data);
  };

  return (

  	<div className="order"> 

      <h2>Order</h2>

    	{ Object.keys(data).length > 0  && 
    		<div className="order-data">
      		<p>{data.addr}</p>
      		<p>{data.mobile}</p>
    		</div>
    	}

      <button onClick={handlePopup}>Show Popup</button>

      { isShowPopup && 
      	<PopupContent onCloseButtonClick = {handlePopupClose} />
      }

    </div>
  );
}

export default Order;