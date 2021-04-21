import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const 
  Home = lazy(() => import('./routes/Home')),
  About = lazy(() => import('./routes/About')),
  Order = lazy(() => import('./Order')),
  OrderHook = lazy(() => import('./OrderHook')),
  HistoryTest = lazy(() => import('./HistoryTest')),
  List = lazy(() => import('./routes/List'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/order" component={Order}/>
        <Route path="/orderhook" component={OrderHook}/>
        <Route path="/historytest" component={HistoryTest}/>
        <Route path="/list" component={List}/>
      </Switch>
    </Suspense>
  </Router>
);

export default App;
