import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import { useLocation } from "react-router-dom";

// TODO provide pk here
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const Payment = () => {
    const location = useLocation();
    const payableData = location.state;
    console.log(payableData);
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