import React, { Component, Fragment } from 'react'
import {   Route, Routes, Navigate, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoute = ( isAdmin, ...rest) => {

    const { isAuthenticated, loading, user } = useSelector(state => state.auth)
    console.log('0 Ibou Tu Parle trop')
    const  goto = useNavigate();
    
    return (
        <Fragment>
        {loading === false && (
        <Routes>
            <Route
                {...rest}
                render={props => {
                    if (isAuthenticated === false) {
                        goto("/login") 
                        return <Navigate to='/login' />
                    }

                    if (isAdmin === true && user.role !== 'admin') {
                        return <Navigate to="/" />
                    }

                    return <Component {...props} />
                }}
            />
        </Routes>

        )}
    </Fragment>
    )
}

export default ProtectedRoute
