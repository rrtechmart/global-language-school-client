import { useEffect, useState } from "react";
import useInstructor from "../../hooks/useInstructor";


const InstructorClass = () => {
    const [instructors] =useInstructor();
    const [selectedInstructor, setSelectedInstructor]=useState([]);
    useEffect(()=>{ 
        
        fetch(`https://global-language-school-server-rrtechmart.vercel.app/instructorClass?email=${instructors?.email}`)
        .then(res=>res.json())
        .then(data => setSelectedInstructor(data))
       
        
    } ,[])
    console.log(selectedInstructor);
    
    
    return (
        <div>
            <h1>Instructor classes are available here</h1>
            {/* {Instructor.length} */}

        </div>
    );
};

export default InstructorClass;