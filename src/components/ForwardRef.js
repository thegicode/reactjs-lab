import { forwardRef, useRef } from "react";

const css = {
	'display' : 'flex',
	'justifyContent' : 'center',
	'marginTop': '3rem'
};

const Input = forwardRef((props, ref) => {
    return <input type="text" data-index={props.index} ref={ref}/>;
});

function FowardRefCpnt() {
  const inputEl = useRef(null);

  function handleClick() {
    inputEl.current.focus();
  }

  return (
	<div style={css}>
      <Input ref={inputEl} index='0' />
      <button onClick={handleClick}>입력란 포커스</button>
    </div>
  );
}

export default FowardRefCpnt