import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import login from '../../assets/class/login.png';


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const onSubmit = data => {
        console.log(data);
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);

                Swal.fire({
                    title: 'User login successfully',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })

    };

    const handleTogglePassword = () => {
        setShowPassword(prevState => !prevState);
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-center">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <img className="hidden md:block mx-auto lg:text-center my-6" src={login} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered"
                                 />

                                {errors.email && <span className="text-red-600">Email is required</span>}
                                
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPassword ? "text" : "password"} name="password" {...register("password", { required: true })} placeholder="password" className="input input-bordered" />

                                <div className="w-full text-end ">
                                    <button onClick={handleTogglePassword} className="btn btn-sm btn-circle justify-center">
                                        {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                                    </button>
                                </div>

                                {errors.password && <span className="text-red-600">Password is required</span>}
                                {errors.FirebaseError && <span className="text-red-600">Password/email is not match</span>}
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary"> <input type="submit" value="Login" /> </button>
                            </div>


                        </form>
                        <SocialLogin></SocialLogin>

                        <p className="mx-auto py-4">Are you new here?? <span> <Link to='/signup'>Sign Up</Link> </span> </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;