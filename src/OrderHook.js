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

  	<div> 

      <p>Order</p>

      <br/><br/>

    	{ Object.keys(data).length > 0  && 
    		<div>
      		<p>{data.addr}</p>
      		<p>{data.mobile}</p>
    		</div>
    	}

    	<br/><br/>

      <button onClick={handlePopup}>Show Popup</button>

      {isShowPopup && 
      	<PopupContent onCloseButtonClick = {handlePopupClose} />
      }

    </div>
  );
}

export default Order;