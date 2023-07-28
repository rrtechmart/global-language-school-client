import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useUsers = () => {
    const {user, loading} = useContext(AuthContext);
    const [axiosSecure]= useAxiosSecure();

    const { data: isUsers=[], isLoading: isUsersLoading, isError: isUsersError } = useQuery(
        [ 'isUsers', user?.email],
        async () => {
            try {
                const res = await axiosSecure.get(`/users?email=${user?.email}`);
                return res.data;
            } catch (error) {
                console.error("Error fetching user data:", error);
                throw error;
            }
        },
        {
            enabled: !loading,
        }
    );

    return { isUsers, isUsersLoading, isUsersError };
};

export default useUsers;