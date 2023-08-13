import React, { Component, Fragment } from 'react'
import {   Route, Routes, Navigate, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoute = ({children}, isAdmin) => {

    const { isAuthenticated, loading, user } = useSelector(state => state.auth)
    console.log('0 Ibou Tu Parle trop')
    const  goto = useNavigate();

    if(loading === false){
        if (isAuthenticated !== false) {
            return children;
        }
        else if (isAdmin === true && user.role !== 'admin') {
            return <Navigate to="/" replace />
        }

        else {
            return <Navigate to="/login" replace />;
        }

    }
    
  };

export default ProtectedRoute
