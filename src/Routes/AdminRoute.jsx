import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import { Navigate, useLocation } from "react-router";


const AdminRoute = ({children}) => {
    const {user, loading}=useContext(AuthContext);
    const [isAdmin, isAdminLoading]= useAdmin();
    const location = useLocation();

    if(loading || isAdminLoading){
        return <progress className="progress w-56"></progress>
    }

    if(user && isAdmin){
        return children;
    }

    console.log(isAdmin);

    return <Navigate to='/' state={{from:location}} replace></Navigate>
};

export default AdminRoute;