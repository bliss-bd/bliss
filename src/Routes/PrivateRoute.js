import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../Components/Loader/Loader';
import { userContext } from '../Contexts/UserContexts/UserContexts';
const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(userContext)
    const location = useLocation()
    if (loading) {
        return <Loader></Loader>
    }

    if (user) {
        return children
    }
    return <Navigate to='/signin' state={{ from: location }} replace></Navigate>

};

export default PrivateRoute;