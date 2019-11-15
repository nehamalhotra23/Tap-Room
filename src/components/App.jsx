import React from "react";
import Home from './Home';
import AlienList from "./AlienList";
import { Switch, Route } from 'react-router-dom';


function App() {
  var color = {
    backgroundColor: "grey",
  }
  return (
    <div style={color}>
       <Switch>
       <div className="row">
       <div className="col-md-12"><Route exact path="/" component={Home} /></div>
       
        <div className="col-md-7"><Route exact path="/AlienList" component={AlienList} /></div>
        </div>
      </Switch>
       </div>
  );
}

export default App;