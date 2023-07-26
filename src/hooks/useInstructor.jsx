import { useQuery } from "@tanstack/react-query";


const useInstructor = () => {

    const {data: instructors = [], isLoading: loading}=useQuery({
        queryKey:['instructors'],
        queryFn: async()=>{
            const res = await fetch('https://global-language-school-server-rrtechmart.vercel.app/instructors')
            return res.json();
        }
    })
    return [instructors, loading]
};

export default useInstructor;