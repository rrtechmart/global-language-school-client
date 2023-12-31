import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import SelectedClassCard from "./SelectedClassCard";


const MySelectedClass = () => {
    const {user}=useContext(AuthContext);
    const[selectedClasses, setSelectedClasses] = useState([]);
    useEffect( ()=>{
        fetch(`https://global-language-school-server-rrtechmart.vercel.app/selectedClasses?email=${user?.email}`)
        .then(res =>res.json())
        .then(data => setSelectedClasses(data))
    },[selectedClasses])

    return (
        <div>
            <h1 className="text-4xl font-bold">This is my classes that I selected to get enroll </h1>
            

            <div className="grid grid-cols-2 gap-10">
                {
                    selectedClasses.map(selectedClass => <SelectedClassCard
                    key={selectedClass._id}
                    selectedClass={selectedClass}
                    ></SelectedClassCard>)
                }
            </div>
            
        </div>
    );
};

export default MySelectedClass;