import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Slider from '../Carousel/Carousel';
import Login from '../Login/Login'
import Register from '../Register/Register'

const MyRouting = (props) => {
    return (
        <Router>
            <div className="MyRouting">
                <Switch>
                    <Route exact path="/login" component={Login} />
                </Switch>
                <Switch>
                    <Route exact path="/" component={Slider} />
                </Switch>
                <Switch>
                    <Route exact path="/register" component={Register} />
                </Switch>
            </div>
        </Router>
    );
}

export default MyRouting;