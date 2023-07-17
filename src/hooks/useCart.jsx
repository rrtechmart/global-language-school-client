import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useCart = () =>{
    const {user} = useContext(AuthContext);
    const {refetch, isLoading:loading,  data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async ()=>{
            const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`);
            return res.json();
        }
      })
      return [loading, cart, refetch]

}
export default useCart;