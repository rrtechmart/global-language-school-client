import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {
    const {user, loading} = useContext(AuthContext);
    const [axiosSecure]= useAxiosSecure();
    console.log(user);

    const {data: isAdmin, isLoading: isAdminLoading}= useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async ()=>{

            if (!user?.email) {
                return false;
              }
              const encodedEmail = encodeURIComponent(user.email);
              console.log(encodedEmail);


            const res = await axiosSecure.get(`/users/admin/${encodedEmail}`);
            // console.log('is admin response', res);
            return res.data.admin;
        }
    })
    console.log(isAdmin);
    return [isAdmin, isAdminLoading]
};

export default useAdmin;