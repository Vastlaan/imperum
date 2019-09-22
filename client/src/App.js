import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Navigation from './Components/navigation'
import Landing from './Components/landing'
import Pakkets from './Components/pakkets'
import About from './Components/about'
import Privacy from './Components/privacy'
import Footer from './Components/footer'

function App() {
  return (
    <div className="App">
    
      <Navigation/>

      <BrowserRouter>
      	<Route path="/" exact={true} component={Landing} />
      	<Route path="/pakkets" exact={true} component={Pakkets} />
      	<Route path="/about" exact={true} component={About} />
      	<Route path="/privacy" exact={true} component={Privacy} />
      </BrowserRouter>

      <Footer />
      
    </div>
  );
}

export default App;
