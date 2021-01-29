import React, { Suspense } from 'react';

// import OrderHook from './OrderHook';
import './App.css';

const Home = React.lazy(() => import('./routes/Home'));
const About = React.lazy(() => import('./routes/About'));

function App() {

  return (
    <div className="App">
      <div>
        {/* <Order /> */}
        {/* <OrderHook /> */ }
        <Suspense fallback={<div>Loading...</div>}>
	       	<section>
	          <Home />
	          <About />
	        </section>
	    </Suspense>
      </div>
    </div>
  );
}

export default App;
