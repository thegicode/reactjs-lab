function PopupContent(props) {

const data = {
	addr: '서울시 강동구 고덕동',
	mobile: '010-124-6790'
};

  function handleClick(){
  	props.onCloseButtonClick(data);
  }

  return (
    <div className="popupContent">
    	<button type="button" onClick={handleClick}>Popup Close & Pass data</button>
    </div>
  );
}

export default PopupContent;