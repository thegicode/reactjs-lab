import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const 
  // Home = lazy(() => import('./routes/Home')),
  About = lazy(() => import('./routes/About')),
  Order = lazy(() => import('./Order')),
  OrderHook = lazy(() => import('./OrderHook')),
  HashTest = lazy(() => import('./HashTest')),
  HistoryTest = lazy(() => import('./HistoryTest')),
  ListScroll = lazy(() => import('./routes/ListScroll')),
  ScrollTest = lazy(() => import('./routes/ScrollTest'));

const props ={
  a: 1,
  b: 2
};

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/about" component={About}/>
        <Route path="/order" component={Order}/>
        <Route path="/orderhook" component={OrderHook}/>
       { <Route path="/historytest" component={HistoryTest}/>}
        <Route path="/hashTest" component={HashTest} props={props} />
        <Route path="/listscroll" component={ListScroll}/>
        {/*<Route component={HashTest}/>*/}
        <Route path="/scrollTest" component={ScrollTest} />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
