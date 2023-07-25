import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";
// import useAuth from "../../../hooks/useAuth";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const {id}=useParams();
    console.log(id);
    // const { user } = useAuth();
    // const location = useLocation();
    // const {_id, className, availableSeats, price}=location.state || {};
    // console.log(_id, className,availableSeats,price);

    // const payableClass = {
    //     _id:payableClass._id,
    //     availableSeats:payableClass.availableSeats,
    //     price: payableClass.price
    // }

    fetch(`http://localhost:5000/selectedClasses/${id}`)
    .then(res => res.json())
    .then(data =>{
        console.log(data);
    })

    return (
        <div className="w-full p-10 ">
            <h1 className="mb-6"> Please pay first</h1>

            <Elements stripe={stripePromise}>
                <CheckOutForm></CheckOutForm>
            </Elements>



        </div>
    );
};

export default Payment;