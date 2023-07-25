import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {
    const {user, loading} = useContext(AuthContext);
    const [axiosSecure]= useAxiosSecure();

    const {data:isAdmin, isLoading: isAdminLoading}= useQuery({
        queryKey:['isAdmin', user?.email],
        enabled:!loading,
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/users/admin?email=${user?.email}`)
            // console.log('is admin response', res);
            return res.data.admin;
        }
    })
    console.log(isAdmin);
    return [isAdmin, isAdminLoading]
};

export default useAdmin;