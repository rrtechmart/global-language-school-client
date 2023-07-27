import { Fade, Rotate } from 'react-awesome-reveal';
import imgad1 from '../../../assets/pop instructor/pi9.png'
import imgad2 from '../../../assets/pop instructor/pi8.png'

const AwardedInstructor = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold my-6'>Awarded instructors are here </h1>
            <p className='mb-4'>We have 110 instructor. All of instructors are talented, dedicated to teach their students. Following two instructors are internationally awarded.</p>
            <Fade direction='right' duration={2000} >
                <img className='w-[400px] h-[300px]' src={imgad1} alt="" />
            </Fade>
            <div className='my-10'>
                <Rotate direction='right' duration={2000} >
                    <img className='w-[400px] h-[300px]' src={imgad2} alt="" />
                </Rotate>
            </div>

        </div>
    );
};

export default AwardedInstructor;