import { useEffect, useState } from "react";


const EnrolledClass = () => {
    const [paymentClasses, setPaymentClasses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/paymentClasses')
            .then(res => res.json())
            .then(data => setPaymentClasses(data))
    }, [])

    return (
        <div>
            <h1 className="text-4xl font-bold my-6">Enrolled classes are here</h1>

            <div className=" grid grid-cols-2 gap-6">

                {
                    paymentClasses.map(paymentClass => <div
                        key={paymentClass._id}
                    >
                        <div className="card w-96 bg-primary text-primary-content">
                            <div className="card-body">
                                <h2 className="card-title"> Class Name: {paymentClass.className} </h2>
                                <p> Price:$ {paymentClass.price} </p>
                                <p> Status: Paid </p>
                                <div className="card-actions justify-end">
                                    <button className="btn">See details</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default EnrolledClass;