import React from 'react'
import {Redirect, Route} from "react-router-dom"
import {AuthContext} from "../Context/AuthContext"

const PrivateRoute = ({children, ...props})=>{
    const {isAuth}=React.useContext(AuthContext)
    return isAuth? <Route {...props}>{children}</Route>:<Redirect to="/" />
}
export {PrivateRoute}