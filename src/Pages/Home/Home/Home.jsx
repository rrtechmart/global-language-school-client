import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstractors from "../PopularInstractors/PopularInstractors";
import AwardedInstructor from "../AwardedInstructor/AwardedInstructor";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Global Language School/Home</title>
            </Helmet>
            
            <Banner></Banner>
            <PopularClass></PopularClass>
            <PopularInstractors></PopularInstractors>
            <AwardedInstructor></AwardedInstructor>
        
        </div>
    );
};

export default Home;