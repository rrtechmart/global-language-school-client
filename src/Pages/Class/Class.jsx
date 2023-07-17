import useClass from "../../hooks/useClass";
import ClassCard from "./ClassCard";


const Class = () => {
    const [classes] = useClass();
    const myClass = classes;
    console.log(myClass)
    return (

        <div>
            <h1>This is class page</h1>

            {classes.length}
            <div className="grid grid-cols-3 gap-4">
                {
                    classes.map(classItem => <ClassCard
                        key={classItem._id}
                        classItem={classItem}
                    ></ClassCard>)
                }
            </div>


        </div>
    );
};

export default Class;