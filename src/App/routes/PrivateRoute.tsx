// Libraries
import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';

// Context
import { authContext } from '../context/Auth';

export default function PrivateRoute({ redirect }: {redirect: string}) {

    const user = useContext(authContext);
    return user ? <Outlet /> : <Navigate to={redirect} />
}
