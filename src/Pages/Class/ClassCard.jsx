import { useContext } from "react";
import { Link,  useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";


const ClassCard = ({classItem}) => {
    const {className, availableSeat, instructorName, classImage, price}= classItem;
    const {user}=useContext(AuthContext)
    const navigate = useNavigate();

  
  

    const handleSelectClassItem = classItem =>{
        console.log(classItem);
        if(!user){
            navigate('/login');
        }
        else{
            const selectedClassItem = {email:user.email,className, availableSeat, instructorName, price}
            fetch('http://localhost:5000/selectedClasses', {
                method: 'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body:JSON.stringify(selectedClassItem)
            })
            .then(res =>res.json())
            .then(data =>{
                if(data.insertedId){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your class has been saved',
                        showConfirmButton: false,
                        timer: 1500
                      })
                    //   refetch();
                }
            })
        }

    }
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={classImage} alt="ClassItem" /></figure>
                <div className="card-body">
                    <h2 className="card-title"> Class Name: {className} </h2>
                    <p> Instructor Name: {instructorName} </p>
                    <p> Available seat: {availableSeat} </p>
                    <p> Price: {price} </p>

                    <div className="card-actions justify-end">
                        <Link> <button disabled={availableSeat === 0 || user?.role === 'instructor' || user?.role === 'admin'} onClick={()=>handleSelectClassItem(classItem)} className="btn btn-primary"> Select Class </button> </Link>
                    </div>
                </div>
            </div>
    );
};

export default ClassCard;