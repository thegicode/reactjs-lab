import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));
const Order = lazy(() => import('./Order'));
const OrderHook = lazy(() => import('./OrderHook'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/order" component={Order}/>
        <Route path="/orderhook" component={OrderHook}/>
      </Switch>
    </Suspense>
  </Router>
);



export default App;
