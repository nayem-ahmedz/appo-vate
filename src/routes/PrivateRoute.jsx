import { useContext } from "react";
import { Navigate } from "react-router"
import { AuthContext } from "../context/AuthContext";
import Loading from "../pages/Loading";

export default function PrivateRoute({ children }) {
    const { user, loading } = useContext(AuthContext);
    if(loading){
        return <Loading />;
    }
    if (!user) {
        return <Navigate to='/login' />
    }
    return (children);
}