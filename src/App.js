import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Switch, Route, Link} from 'react-router-dom';
// import Test from './components/Test';
import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';


const App = () => (
    <MuiThemeProvider>
        <Header />
        <div>
        	<Route exact path="/" component={Home} />
        	<Route exact path="/about-us" component={About} />
        </div>
    </MuiThemeProvider>
);

export default App;
{/*<Switch>

             <Route exact path="/" component={Test}/>
        </Switch>*/}