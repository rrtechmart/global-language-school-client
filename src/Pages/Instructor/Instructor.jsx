
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

            <h1 className='text-4xl font-bold'>Our instructors</h1>
            <p className='my-6'>
            The instructors at our school are an exceptional team of dedicated educators, passionate about fostering a nurturing and inspiring learning environment. With diverse expertise across various subjects, they bring a wealth of knowledge to the classroom. Their commitment to student success goes beyond academics, focusing on holistic development, nurturing creativity, critical thinking, and character building. Empathetic and approachable, our instructors actively engage with students, encouraging open dialogue and personalized guidance. Through their innovative teaching methods and unwavering support, they empower students to explore their full potential and embrace lifelong learning. Our instructors play a pivotal role in shaping well-rounded individuals, preparing them for a bright future.
            </p>

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