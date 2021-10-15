import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const 
	Home = lazy(() => import('./components/Home')),
	About = lazy(() => import('./components/About')),
	Order = lazy(() => import('./components/Order')),
	OrderHook = lazy(() => import('./components/OrderHook')),
	HashTest = lazy(() => import('./HashTest')),
	HistoryTest = lazy(() => import('./HistoryTest')),
	ListScroll = lazy(() => import('./components/ListScroll')),
	ScrollTest = lazy(() => import('./components/ScrollTest')),
	Count = lazy(() => import('./components/Count')),
	// PropsState = lazy( () => import('./components/PropsState')),
	Ref = lazy( () => import('./components/Ref')),
	ForwardRef = lazy( () => import('./components/ForwardRef'));

const props ={
	a: 1,
	b: 2
};

const App = () => (
	<Router>
		<Suspense fallback={<div>Loading...</div>}>
			<Switch>
				<Route path="/home" component={Home}/>
				<Route path="/about" component={About}/>
				<Route path="/order" component={Order}/>
				<Route path="/orderhook" component={OrderHook}/>
			 	<Route path="/historytest" component={HistoryTest}/>
				<Route path="/hashTest" component={HashTest} props={props} />
				<Route path="/listscroll" component={ListScroll}/>
				{/*<Route component={HashTest}/>*/}
				<Route path="/scrollTest" component={ScrollTest} />
				<Route path="/count" component={Count} />  {/* useEffect Example - DOM 변경 */}
				{/* <Route path="/propsstate" component={PropsState} /> */}
				<Route path="/ref" component={Ref} />
				<Route path="/forwardref" component={ForwardRef} />
			</Switch>
		</Suspense>
	</Router>
);

export default App;
