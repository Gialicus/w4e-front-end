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

const MyRouting = (props) => {
    return (
        <Router>
            <div className="MyRouting">
                <Switch>
                    <Route exact path={props.loginRoute} component={Login} />
                    <Route exact path={props.homeRoute} component={Slider} />
                    <Route exact path={props.registerRoute} component={Register} />
                    <Route exact path={props.timesheetRoute} component={Timesheet} />
                </Switch>
            </div>
        </Router>
    );
}

export default MyRouting;