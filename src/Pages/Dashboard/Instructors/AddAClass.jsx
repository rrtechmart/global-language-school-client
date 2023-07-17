import { useContext } from "react";
import { useForm } from "react-hook-form"
import { AuthContext } from "../../../Providers/AuthProvider";

const AddAClass = () => {
    const {user} = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        

        if (user && user.email) {
            const addedClass = { className:data.className, classImage:data.photoURL, instructorName: user.displayName, instructorEmail: user.email, availableSeat:data.availableSeat, price:data.price }

            fetch('http://localhost:5000/classes', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(addedClass)

            })
        }
    }




return (
    <div>
        <div className="hero max-w-screen-md bg-base-200">
            <div className="">

                <div className="  w-full max-w-screen-lg shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Class Name</span>
                            </label>
                            <input type="text" name="className" placeholder="class name" className="input input-bordered" {...register("className", { required: true })} />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Class image</span>
                            </label>
                            <input type="text" name="photoURL" placeholder="image URL" className="input input-bordered" {...register("photoURL", { required: true })} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Instructor name</span>
                            </label>
                            <input type="text" name="instructorName" placeholder="instructor name" className="input input-bordered" {...register("instructorName", { required: true })} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Instructor email</span>
                            </label>
                            <input type="text" name="instructorEmail" placeholder="instructor email" className="input input-bordered" {...register("instructorEmail", { required: true })} />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available seat</span>
                            </label>
                            <input type="text" name="availableSeat" placeholder="available seat" className="input input-bordered" {...register("availableSeat", { required: true })} />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name="price" placeholder=" price" className="input input-bordered" {...register("price", { required: true })} />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Add class</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>
);
};

export default AddAClass;