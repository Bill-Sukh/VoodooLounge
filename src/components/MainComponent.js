import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './HomePage/Home';
import AboutPage from './AboutPage/About';
import LocationPage from './LocationPage/Location';
import MenuPage from './MenuPage/Menu';
import GroupDiningPage from './GroupDiningPage/GroupDining';
import OrderPage from './OrderPage/Order';
import Contact from './ContactPage/Contact';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

function Main() {
  return (
          <>  
            <Header />
            <Switch>
              <Route exact path="/">
                <Redirect to="/home" />
              </Route>
              <Route path='/Home' component={Home} />  
              <Route path='/About' component={AboutPage} />  
              <Route path='/Location' component={LocationPage} />  
              <Route path='/Menu' component={MenuPage} />  
              <Route path='/Group' component={GroupDiningPage} />
              <Route path='/Order' component={OrderPage} />
              <Route path='/Contact' component={Contact} />
            </Switch>
            <Footer />
          </>    
  );
}

export default Main;
