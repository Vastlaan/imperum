import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Navigation from './Components/navigation'
import Landing from './Components/landing'
import Footer from './Components/footer'

function App() {
  return (
    <div className="App">
    
      <Navigation/>

      <BrowserRouter>
      	<Route path="/" exact={true} component={Landing} />
      </BrowserRouter>

      <Footer />
      
    </div>
  );
}

export default App;
