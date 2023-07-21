import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useAdmin = () => {
    const {user} = useContext(AuthContext);

    const {data: isAdmin, isLoading: isAdminLoading}= useQuery({
        queryKey:['isAdmin', user?.email],
        queryFn: async ()=>{
            const res = await fetch(`http://localhost:5000/users/admin?email=${user?.email}`)
            console.log('is admin response', res);
            return res.data.admin;
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;