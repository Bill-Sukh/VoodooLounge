import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import AboutPage from './About';
import LocationPage from './Location';
import MenuPage from './MenuPage/Menu';
import GroupDiningPage from './GroupDining';
import OrderPage from './Order';
import Contact from './Contact';
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
