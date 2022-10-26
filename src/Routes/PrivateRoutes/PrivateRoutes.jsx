import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import Spinner from 'react-bootstrap/Spinner';


const PrivateRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    console.log(loading);

    if (loading) {
        return <>
            <div className='text-center mt-5 pt-5 mb-5'>
                <Spinner animation="border" variant="primary" />
                <Spinner animation="border" variant="secondary" />
                <Spinner animation="border" variant="success" />
                <Spinner animation="border" variant="danger" />
                <Spinner animation="border" variant="warning" />
                <Spinner animation="border" variant="primary" />
                <Spinner animation="border" variant="secondary" />
                <Spinner animation="border" variant="success" />
                <Spinner animation="border" variant="danger" />
                <Spinner animation="border" variant="warning" />
            </div>
        </>
    }

    if (user && user.uid) {
        return children
    }

    return <Navigate to='/login' state={{ from: location }} replace />
};

export default PrivateRoutes;