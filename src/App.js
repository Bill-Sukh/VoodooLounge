import React from 'react';
import Header from './components/HeaderComponent';
import Hero from './components/HeroComponent';
import About from './components/AboutComponent';
import Location from './components/LocationComponent';
import Menu from './components/MenuComponent';
import LargeGroup from './components/LargeGroupComponent';
import Order from './components/OrderComponent';
import Footer from './components/FooterComponent';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
         <>  
                <Router>    
                    <Header />
                    <Hero />
                    <About />
                    <Location />
                    <Menu />
                    <LargeGroup />
                    <Order />
                    <Footer />
                    <Switch>    
                         <Route path="/" exact />
                    </Switch>
                </Router>
          </>    
    </div>
  );
}

export default App;
