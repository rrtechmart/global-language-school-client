import pi1 from '../../../assets/pop instructor/pi1.png';
import pi2 from '../../../assets/pop instructor/pi2.png';
import pi3 from '../../../assets/pop instructor/pi3.png';
import pi4 from '../../../assets/pop instructor/pi4.png';
import pi5 from '../../../assets/pop instructor/pi5.png';
import pi6 from '../../../assets/pop instructor/pi6.png';
import pi7 from '../../../assets/pop instructor/pi7.png';
import pi8 from '../../../assets/pop instructor/pi8.png';
import pi9 from '../../../assets/pop instructor/pi9.png';

const PopularInstractors = () => {
    return (
        <div>
            <div className='py-10'>
                <h1 className='text-6xl font-bold'>Our Asset Famous Instructors </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci maxime ab voluptas libero ut ea voluptatem, repellendus odio dolorum vero quidem asperiores architecto impedit aliquam quibusdam optio ratione et iste.
                </p>
            </div>

            <div className='grid md:grid-cols-3 gap-4'>
                <div >
                    <img className='rounded-lg' src={pi1} alt="" />
                </div>
                <div>
                    <img className='rounded-lg' src={pi2} alt="" />
                </div>
                <div>
                    <img className='rounded-lg' src={pi3} alt="" />
                </div>
                <div>
                    <img className='rounded-lg' src={pi4} alt="" />
                </div>
                <div>
                    <img className='rounded-lg' src={pi5} alt="" />
                </div>
                <div>
                    <img className='rounded-lg' src={pi6} alt="" />
                </div>
                <div>
                    <img className='rounded-lg' src={pi7} alt="" />
                </div>
                <div>
                    <img className='rounded-lg' src={pi8} alt="" />
                </div>
                <div>
                    <img className='rounded-lg' src={pi9} alt="" />
                </div>
            </div>

        </div>
    );
};

export default PopularInstractors;