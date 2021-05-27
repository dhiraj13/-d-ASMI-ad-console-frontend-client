import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getFromLocalStorage } from '../../helpers/localstorage';

export const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={props => {
            if (!getFromLocalStorage("user")) {
                // not logged in so redirect to login page with the return url
                return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            }

            // logged in so return component
            return <Component {...props} />
        }} />
    )
}
