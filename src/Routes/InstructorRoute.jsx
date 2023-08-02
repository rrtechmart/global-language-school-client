

import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";
import useInstructor from "../hooks/useInstructor";


const InstructorRoute = ({ children }) => {
    const {user, loading}=useContext(AuthContext);
    const [isInstructor] = useInstructor();
    const location = useLocation();

    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if(user && isInstructor){
        return children;
    }
    

    return <Navigate to='/' state={{from:location}} replace></Navigate>
};
export default InstructorRoute;