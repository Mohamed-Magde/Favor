import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import ApplyPartner from './containers/apply-partner/ApplyPartner';
import Blog from './containers/blog/Blog';
import Careers from './containers/careers/Careers';
import Gifts from './containers/gifts/Gifts';
import Help from './containers/help/Help';
import Landing from './containers/landing/Landing';
import Press from './containers/press/Press';
function App() {
	return (
		<Router>
			<Fragment>
				<Navbar />
				<Switch>
					<Route exact path="/" component={Landing} />
					<Route path="/careers" component={Careers} />
					<Route path="/merchants" component={ApplyPartner} />
					<Route path="/blog" component={Blog} />
					<Route path="/press" component={Press} />
					<Route path="/gifts" component={Gifts} />
					<Route path="/help" component={Help} />
				</Switch>
				<Footer />
			</Fragment>
		</Router>
	);
}

export default App;
