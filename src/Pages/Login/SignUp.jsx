import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = {name: data.name, email: data.email}

                        fetch('http://localhost:5000/users', {
                            method:'POST',
                            headers:{
                                'content-type': 'application/json',                                
                            },
                            body:JSON.stringify(saveUser)
                            
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        title: 'Profile update successfully',
                                        showClass: {
                                            popup: 'animate__animated animate__fadeInDown'
                                        },
                                        hideClass: {
                                            popup: 'animate__animated animate__fadeOutUp'
                                        }
                                    })
                                    navigate('/')

                                }
                            })


                    })
                    .catch(error => {
                        console.log(error)
                    })
            })
    };

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up </h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" {...register("name", { required: true })} placeholder="name" className="input input-bordered" />

                                {errors.name && <span className="text-red-600">This field is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />

                                {errors.email && <span className="text-red-600">This field is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/
                                })} placeholder="password" className="input input-bordered" />

                                {errors.password?.type === 'required' && <span className="text-red-600">This field is required</span>}
                                {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be 6 character or more</span>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600" role="alert">Password should have one uppercase, one lowercase, one special character and at least 6 digits</p>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name="confirmPassword" {...register("confirmPassword", { required: true })} placeholder="password" className="input input-bordered" />

                                {errors.confirmPassword && <span className="text-red-600">This field is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input {...register("photoURL", { required: true })} type="text" placeholder="Photo URL" className="input input-bordered" />

                                {errors.photoURL?.type === 'required' && <p className="text-red-600" role="alert">Photo URL is required</p>}
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                        </form>
                        <div>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SignUp;