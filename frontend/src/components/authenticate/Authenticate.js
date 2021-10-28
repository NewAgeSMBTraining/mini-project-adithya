import React from 'react';
import {Route,Redirect} from "react-router-dom"

function Authenticate(props) {
    const isAuthenticated = localStorage.getItem("Token")

    return (
        isAuthenticated ? <Route {...props}/> : <Redirect to="/"/>
    )
}

export default Authenticate