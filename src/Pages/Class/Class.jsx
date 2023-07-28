import { Helmet } from "react-helmet-async";
import useClass from "../../hooks/useClass";
import ClassCard from "./ClassCard";


const Class = () => {
    const [classes] = useClass();
    const myClass = classes;
    console.log(myClass)
    return (

        <div>
            <Helmet>
                <title>Global Language School/Classes</title>
            </Helmet>
            <h1 className='text-4xl font-bold'>Our important classes</h1>
            <p className="my-6">Experience the joy of language at our immersive foreign language learning school. Our native-speaking instructors create a dynamic environment to boost fluency and cultural understanding. Small classes ensure personalized attention, making the journey enjoyable for learners of all levels. Discover the world through language with us today!</p>
            
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