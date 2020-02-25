import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Slider from '../Carousel/Carousel';
import Login from '../Login/Login'
import Register from '../Register/Register'
import Timesheet from '../Timesheet/Timesheet';
import Desk from '../Desk/Desk';
import Timegroup from '../Timegroup/Timegroup';

const MyRouting = (props) => {
    return (
        <Router>
            <div className="MyRouting">
                <Switch>
                    <Route exact path={props.loginRoute} component={Login} />
                    <Route exact path={props.homeRoute} component={Slider} />
                    <Route exact path={props.registerRoute} component={Register} />
                    <Route exact path={props.timesheetRoute} component={Timesheet} />
                    <Route exact path={props.deskRoute} component={Desk} />
                    <Route exact path={props.timegroupRoute} component={Timegroup} />
                </Switch>
            </div>
        </Router>
    );
}

export default MyRouting;