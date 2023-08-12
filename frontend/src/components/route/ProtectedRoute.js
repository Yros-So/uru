import React, { Fragment } from 'react'
import {  useRoute, Route, Routes, Navigate, BrowserRouter } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoute = ({ children,isAdmin, element: Component , ...rest }) => {

    const { isAuthenticated, loading, user } = useSelector(state => state.auth)
    console.log('0 Salut Ibou Tu Parle troooooooooooooooooooooooopppppppppppp')

    return (
            <Routes> 
                <Route  {...rest} render={props => !isAuthenticated && !loading ? (console.log('1 troooooooooooooooooooooooopppppppppppp'), <Navigate to='/login' />) : (console.log('1 troooooooooooooooooooooooopppppppppppp'),<Component {...props} />)} />
            </Routes>
    )
}

export default ProtectedRoute
