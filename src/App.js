import React from 'react';
import Customer from './Panels/Customer/CustomerPanel';
import Admin from './Panels/Admin/AdminPanel';
import {Switch, Route, withRouter} from 'react-router-dom';

class App extends React.Component {
  render(){
  
    return (
    <div className="App">
        <Switch>
        <Route  path = "/Admin"  component = {Admin}/>
        <Route  path = "/" component = {Customer}/>
        
        </Switch>    
      

    </div>
  );
  }
}

export default withRouter(App);
