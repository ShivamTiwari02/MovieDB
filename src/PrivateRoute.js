import React from 'react'
import { Route, Redirect} from 'react-router-dom';
import { useAuth } from './Component/Auth/authcontext'

export default function PrivateRoute({ component : Component, ...rest}) {

    const { currentUser } = useAuth();
    return (
        <Route
            {...rest}
            render = {props => {
               return currentUser ? <Component {...props} /> : <Redirect to = '/signin'/>
            }}>
            {console.log(currentUser)}
        </Route>
    )
}
