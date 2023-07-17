
import { Helmet } from 'react-helmet-async';
import useInstructor from '../../hooks/useInstructor';
import InstructorCard from './InstructorCard';

const Instructor = () => {
    const [instructors] = useInstructor();
    console.log(instructors);
    return (
        <div>
            <Helmet>
                <title>Global Language School/Instructor</title>
            </Helmet>

            <h1>here is all instructors</h1>
            {instructors.length}

            <div className='grid grid-cols-3 gap-4 py-6'>
                {
                    instructors.map(instructor => <InstructorCard
                        key={instructor._id}
                        instructor={instructor}
                    ></InstructorCard>)
                }
            </div>

        </div>
    );
};

export default Instructor;