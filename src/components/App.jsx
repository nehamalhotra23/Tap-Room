import React from "react";
import Header from './Header';
import KombuchaList from "./KombuchaList";
import { Switch, Route } from 'react-router-dom';


function App() {
  var color = {
    backgroundColor: "grey",
  }
  return (
    <div>
       <Switch>
        <Route exact path="/" component={Header}/>
        <Route  path="/KombuchaList" component={KombuchaList}/>
        
      </Switch>
       </div>
  );
}

export default App;