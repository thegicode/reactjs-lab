import React, { Suspense } from 'react';
import loadable from '@loadable/component'

import './App.css';

// const Home = loadable(() => import('./routes/Home'));
const AsyncPage = loadable(props => import(`./routes/${props.page}`))


function App() {

  return (
    <div className="App">
      <div>
	        {/* <Home /> */}
          <AsyncPage page="Home" />
      </div>
    </div>
  );
}

export default App;
