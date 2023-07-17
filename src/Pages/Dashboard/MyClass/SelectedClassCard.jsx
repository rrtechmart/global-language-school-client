import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const SelectedClassCard = ({ selectedClass }) => {
    const {_id, className, availableSeats, instructorName, price } = selectedClass;
    const [selectedClasses, setSelectedClasses] = useState([]);

    const handleDelete = id=>{
        const proceed = confirm('Are you confirm to delete it??')
        if(proceed){
            fetch(`http://localhost:5000/selectedClasses/${id}`,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                if(data.deletedCount > 0){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'It has been deleted successfully',
                        showConfirmButton: false,
                        timer: 1500
                      })

                      const remaining = selectedClasses.filter(selectedClass=> selectedClass._id !== id)
                      setSelectedClasses(remaining);
                }

            })
        }

    }

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title"> Class Name: {className} </h2>
                    <p> Available seat: {availableSeats}  </p>
                    <p> Instructor Name: {instructorName}  </p>
                    <p> Price : $ {price}  </p>
                    <div className="card-actions justify-around">
                        <button onClick={()=>handleDelete(_id)} className="btn btn-secondary">Delete</button>
                        <Link to='/dashboard/payment'> <button className="btn btn-primary px-8">Pay</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SelectedClassCard;