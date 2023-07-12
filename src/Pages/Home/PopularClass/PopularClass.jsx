
import pc1 from '../../../assets/pop class/c1.png';
import pc2 from '../../../assets/pop class/c2.png';
import pc3 from '../../../assets/pop class/c3.png';
import pc4 from '../../../assets/pop class/c4.png';
import pc5 from '../../../assets/pop class/c5.png';
import pc6 from '../../../assets/pop class/c6.png';
import pc7 from '../../../assets/pop class/c7.png';
import pc8 from '../../../assets/pop class/c8.png';
const PopularClass = () => {
    return (
        <div>
            <div className='py-10'>
                <h1 className='text-6xl font-bold'>Most Popular Classes </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci maxime ab voluptas libero ut ea voluptatem, repellendus odio dolorum vero quidem asperiores architecto impedit aliquam quibusdam optio ratione et iste.
                </p>
            </div>

            <div className='grid md:grid-cols-3 gap-4'>
                <div >
                    <img className='rounded-lg' src={pc1} alt="" />
                </div>
                <div>
                    <img className='rounded-lg' src={pc2} alt="" />
                </div>
                <div>
                    <img className='rounded-lg' src={pc3} alt="" />
                </div>
                <div>
                    <img className='rounded-lg' src={pc4} alt="" />
                </div>
                <div>
                    <img className='rounded-lg' src={pc5} alt="" />
                </div>
                <div>
                    <img className='rounded-lg' src={pc6} alt="" />
                </div>
                <div>
                    <img className='rounded-lg' src={pc7} alt="" />
                </div>
                <div>
                    <img className='rounded-lg' src={pc8} alt="" />
                </div>
            </div>

        </div>
    );
};

export default PopularClass;