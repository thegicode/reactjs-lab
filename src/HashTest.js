import React from 'react';
 
let id = 0;

function HashTest(props){

  function handleChange(){
    id++;
    window.location.hash  = `id${id}`;
  }

  window.onhashchange = () => {
  }

  return (
    <div>
      <h5>hashtest</h5>
      <button type="button" onClick={handleChange}>click - hash change</button>
    </div>
  )
}

export default HashTest;

