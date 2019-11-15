import React from "react";
import Header from './Header';
import KombuchaList from "./KombuchaList";
import { Switch, Route } from 'react-router-dom';


function App() {
  var color = {
    backgroundColor: "grey",
  }
  return (
    <div style={color}>
     
       <Switch>
        
       <div ><Route exact path="/" component={Header} /></div>
       
        <div ><Route exact path="/KombuchaList" component={KombuchaList} /></div>
        
      </Switch>
       </div>
  );
}

export default App;