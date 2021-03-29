import React from "react"

import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Rate from "./pages/rate";
import Popup from "./pages/popup";
import Tab from "./pages/tab";
import TablePage from "./pages/table";
import Message from "./pages/message";


const Router=()=>{
return( <div>


<Switch>
    
    
    <Route path="/popup">
        <Popup />
    </Route>
    <Route path="/rate">
        <Rate />
    </Route>
    <Route path="/tab">
        <Tab />
    </Route>
    <Route path="/table">
        <TablePage />
    </Route>
    <Route path="/message">
        <Message />
    </Route>

       <Route path="/" exact={true}><Home />
    </Route> 

</Switch>

</div>)

}
export default Router;