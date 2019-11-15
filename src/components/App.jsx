import React from "react";
import Gt from "./Gt";
import Synergy from "./Synergy";
import NewKombucha from "./NewKombucha";
import { Switch, Route } from 'react-router-dom';
import MainPage from "./MainPage";


function App() {
  var color = {
    backgroundColor: "grey",
  }
  return (
    <div>
       <Switch>
        <Route exact path="/" component={MainPage} />
        <Route  path="/Gt" component={Gt}/>
       
        <Route path="/NewKombucha" component={NewKombucha} />
        </Switch>
       </div>
  );
}

export default App;