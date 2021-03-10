import React from 'react'
import { Route, Switch } from 'react-router'
import Home from '../Components/Home/Home'
import World from '../Components/World/World'
import UsPolitics from '../Components/UsPolitics/UsPolitics'
import Business from '../Components/Business/Business'
import Health from '../Components/Health/Health'
import Entertainment from '../Components/Entertainment/Entertainment'
import Style from '../Components/Style/Style'
import Travel from '../Components/Travel/Travel'
import Sports from '../Components/Sports/Sports'
import Videos from '../Components/Videos/Videos'

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" >
                    <Home/>
                </Route>
                <Route exact path="/world" >
                    <World />
                </Route>
                <Route exact path="/uspolitics" >
                    <UsPolitics />
                </Route>
                <Route exact path="/business" >
                    <Business />
                </Route>
                <Route exact path="/health" >
                    <Health />
                </Route>
                <Route exact path="/entertainment" >
                    <Entertainment/>
                </Route>
                <Route exact path="/style" >
                    <Style />
                </Route>
                <Route exact path="/travel" >
                    <Travel />
                </Route>
                <Route exact path="/sports" >
                    <Sports />
                </Route>
                <Route exact path="/videos" >
                    <Videos />
                </Route>
                <PrivateRoute path="/profile">
                    <Profile />
                </PrivateRoute>
            </Switch>   
        </div>
    )
}

export default Routes
