import React from "react";
import Home from './Home';
import AlienList from "./AlienList";
import { Switch, Route } from 'react-router-dom';


function App() {
  
  return (
    <div>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/AlienList" component={AlienList} />
      </Switch>

    </div>
  );
}

export default App;