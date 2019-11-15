import React from 'react';
import Gt from './Gt';
import Remedy from './Remedy';
import NewKombucha from './NewKombucha';
import NewEmployee from './NewEmployee';
import SignIn from './SignIn';
import { Switch, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Error404 from './Error404';

function App() {
 

  return (
    <div >
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/Gt" component={Gt} />
        <Route path="/Remedy" component={Remedy} />
        <Route path="/NewKombucha" component={NewKombucha} />
        <Route path="/SignIn" component={SignIn} />
        <Route path="/NewEmployee" component={NewEmployee} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}
export default App;