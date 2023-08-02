// import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const useInstructor = () => {
    const {user}= useContext(AuthContext);
    const [isInstructor, setIsInstructor]=useState([]);

    // const {data: isInstructor = [], isLoading: isInstructorLoading}=useQuery({
    //     queryKey:['isInstructor', user?.role ==='instructor'],
    //     enabled:!loading,
    //     queryFn: async()=>{
    //         const res = await fetch('https://global-language-school-server-rrtechmart.vercel.app/users/instructor')
    //         console.log(res);
    //         return res.json();
    //     }
    // })

    useEffect( ()=>{
        fetch('https://global-language-school-server-rrtechmart.vercel.app/users/instructor')
        .then(res => res.json())
        .then(data =>{
            const isExist=data.find(singleUser => singleUser?.email == user?.email)
            setIsInstructor(isExist?.role == 'instructor')
            // setIsInstructor(isExist?isExist.role == 'instructor': false)

        })
    },[])
    return [isInstructor]
};

export default useInstructor;