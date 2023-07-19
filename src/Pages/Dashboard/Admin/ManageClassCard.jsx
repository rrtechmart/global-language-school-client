import Swal from "sweetalert2";

const ManageClassCard = ({ classItem }) => {
    const { classImage, className, instructorName, instructorEmail, availableSeat, price, status, _id } = classItem;

    const handleApprove = id => {
        fetch(`http://localhost:5000/classes/${id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your class has been approved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleDeny = id =>{
        fetch(`http://localhost:5000/classes/deny/${id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your class has been denied',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={classImage} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title"> Class Name: {className} </h2>
                <p>Instructor Name: {instructorName}</p>
                <p> Instructor Email: {instructorEmail}</p>
                <p> Available Seat: {availableSeat}</p>
                <p> Price: $ {price}</p>
                <p className="text-lg font-medium"> Status:  {status}</p>
                <div className="card-actions justify-around">
                    {
                        status === "approved" || status === "denied"? null : <>
                            <button onClick={() => handleApprove(_id)} className="btn btn-sm btn-primary">Approved</button>

                            <button onClick={()=>handleDeny(_id)} className="btn btn-sm btn-error">Deny</button>
                        </>
                    }

                    <button className="btn btn-sm btn-secondary">Send feedback</button>
                </div>
            </div>
        </div>
    );
};

export default ManageClassCard;