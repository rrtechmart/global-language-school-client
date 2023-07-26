import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckOutForm = ({ classId, className, availableSeats, price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState('');
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return
    }
    // from chat
    const paymentDetails = {
      amount: price * 100,
      currency: "usd",
      description: `Payment for ${className}`,
    };
    const response = await fetch("https://global-language-school-server-rrtechmart.vercel.app/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paymentDetails),
    });

    const data = await response.json();

    const result = await stripe.confirmCardPayment(data.clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (result.error) {
      setPaymentError(result.error.message);
      setPaymentSuccess(null);
    } else {
      // Payment succeeded
      setPaymentSuccess("Payment successful!");
      setPaymentError(null);


      const paymentInfo = {
        classId,
        className,
        availableSeats,
        paymentId: result.paymentIntent.id,
      };

      // const card = elements.getElement(CardElement);
      // if (card === null) {
      //   return
      // }
      // console.log("card", card);

      // const { error, paymentMethod } = await stripe.createPaymentMethod({
      //   type: 'card',
      //   card
      // })
      // if (error) {
      //   console.log("error", error)
      //   setCardError(error.message);
      // }
      // else {
      //   setCardError('');
      //   console.log('payment method', paymentMethod)
      // }
    }

    return (
      <>
        <form onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
          />
          <button className="btn btn-primary mt-6 px-10 btn-sm" type="submit" disabled={!stripe}>
            Pay
          </button>
        </form>
        {cardError && <p className="text-red-600"> {cardError} </p>}
      </>
    );
  };
}
  export default CheckOutForm;