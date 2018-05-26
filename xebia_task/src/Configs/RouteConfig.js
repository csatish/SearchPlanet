import React, {Component} from 'react'
import {BrowserRouter, Route, Switch}  from 'react-router-dom'
import LoginComponent from '../Components/LoginComponent'
import SearchComponent from '../Components/SearchComponent'

class AppRoute extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path='/' component={LoginComponent} />
                        <Route path="/home" component={SearchComponent} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default AppRoute;