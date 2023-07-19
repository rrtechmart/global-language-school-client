
import useClass from "../../../hooks/useClass";
import ManageClassCard from "./ManageClassCard";


const ManageClass = () => {
    const [classes] = useClass()


    return (
        <div>
            <h1 className="text-3xl font-bold">All classes are here that added by all instructors </h1>
            {classes.length}

            <div className="grid grid-cols-2 gap-10">
                {
                    classes.map(classItem => <ManageClassCard
                        key={classItem._id}
                        classItem={classItem}
                    ></ManageClassCard>)
                }

            </div>

        </div>
    );
};

export default ManageClass;