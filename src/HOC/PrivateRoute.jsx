import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router'

function PrivateRoute({ component: Component, ...rest }) {
    const { token } = useSelector(state => state.user)
    return <Route {...rest} render={props => token ? <Component {...props} /> : <Redirect to='/signin' />} />
}
export default PrivateRoute
