
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import useUsers from "../hooks/useUsers";
import { useContext } from "react";


const InstructorRoute = ({ children }) => {
    const {user, loading}=useContext(AuthContext);
    const { isUsers, isUsersLoading } = useUsers();
    const location = useLocation();

    if(loading || isUsersLoading){
        return <progress className="progress w-56"></progress>
    }

    if(user || isUsers.role === "instructor"){
        console.log(user);
        return children;
    }

    

    return <Navigate to='/' state={{from:location}} replace></Navigate>
};
export default InstructorRoute;