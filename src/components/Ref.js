import { useRef } from "react";

const css = {
	'display' : 'flex',
	'justifyContent' : 'center',
	'marginTop': '3rem'
};

function Ref(){
    const inputEl = useRef(null);

    function handleClick() {
        inputEl.current.focus();
    }

	return(
		<div style={css}>
			<input type="text" ref={inputEl} />
            <button onClick={handleClick}>입력란 포커스</button>
		</div>
	);
}

export default Ref;


