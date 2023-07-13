import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstractors from "../PopularInstractors/PopularInstractors";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Global Language School/Home</title>
            </Helmet>
            
            <Banner></Banner>
            <PopularClass></PopularClass>
            <PopularInstractors></PopularInstractors>
        
        </div>
    );
};

export default Home;