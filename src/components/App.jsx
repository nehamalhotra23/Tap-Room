import React from "react";
import Flavours from "./Flavours";
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
        <Route  path="/flavours" component={Flavours}/>
        
      </Switch>
       </div>
  );
}

export default App;