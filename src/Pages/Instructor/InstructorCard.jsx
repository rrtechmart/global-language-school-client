import { Link } from "react-router-dom";


const InstructorCard = ({instructor}) => {
    const {email, image, name, classesTaken, numberOfClassesTaken}=instructor;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title"> Instructor Name: {name} </h2>
                    <p> Instructor Email: {email} </p>
                    <p> Number of Class taken: {numberOfClassesTaken} </p>
                    <p> Name of Classes taken: {classesTaken} </p>

                    <div className="card-actions justify-end">
                        <Link to='/instructorClass'><button className="btn btn-primary">See Classes</button></Link>
                    </div>
                </div>
            </div>
    );
};

export default InstructorCard;