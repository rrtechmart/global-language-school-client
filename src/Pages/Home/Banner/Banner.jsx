import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import class1 from '../../../assets/class/c1.png';
import class4 from '../../../assets/class/c4.png';
import class5 from '../../../assets/class/c5.png';
import class6 from '../../../assets/class/c6.png';
import class7 from '../../../assets/class/c7.png';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <div className='md:flex rounded-lg'>
                    <img className='w-2/3' src={class1} />
                    <div className=' bg-slate-200'>
                        <h2 className='text-4xl font-bold py-10'> English class </h2>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis perspiciatis ex officiis deserunt ipsa vitae, dolore, aspernatur sapiente tempora dignissimos eveniet quod nesciunt quam at recusandae earum praesentium sunt soluta.
                    </div>
                </div>
               
                <div className='md:flex rounded-lg'>
                    <img className='w-2/3' src={class4} />
                    <div className=' bg-slate-200'>
                        <h2 className='text-4xl font-bold py-10'> English class </h2>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis perspiciatis ex officiis deserunt ipsa vitae, dolore, aspernatur sapiente tempora dignissimos eveniet quod nesciunt quam at recusandae earum praesentium sunt soluta.
                    </div>
                </div>
                <div className='md:flex rounded-lg'>
                    <img className='w-2/3' src={class5} />
                    <div className=' bg-slate-200'>
                        <h2 className='text-4xl font-bold py-10'> English class </h2>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis perspiciatis ex officiis deserunt ipsa vitae, dolore, aspernatur sapiente tempora dignissimos eveniet quod nesciunt quam at recusandae earum praesentium sunt soluta.
                    </div>
                </div>
                <div className='md:flex rounded-lg'>
                    <img className='w-2/3' src={class6} />
                    <div className=' bg-slate-200'>
                        <h2 className='text-4xl font-bold py-10'> English class </h2>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis perspiciatis ex officiis deserunt ipsa vitae, dolore, aspernatur sapiente tempora dignissimos eveniet quod nesciunt quam at recusandae earum praesentium sunt soluta.
                    </div>
                </div>
                <div className='md:flex rounded-lg'>
                    <img className='w-2/3' src={class7} />
                    <div className=' bg-slate-200'>
                        <h2 className='text-4xl font-bold py-10'> English class </h2>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis perspiciatis ex officiis deserunt ipsa vitae, dolore, aspernatur sapiente tempora dignissimos eveniet quod nesciunt quam at recusandae earum praesentium sunt soluta.
                    </div>
                </div>
                

            </Carousel>

        </div>
    );
};

export default Banner;