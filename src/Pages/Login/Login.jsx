import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";


const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />

                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name="password" {...register("password", { required: true })} placeholder="password" className="input input-bordered" />
                                
                                {errors.password && <span className="text-red-600">Password is required</span>}
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary"> <input type="submit" value="Login" /> </button> <br />

                                <button className="btn btn-primary"> <input type="submit" value="Google sign In" /> </button>
                            </div>

                            <p>Are you new?? <span> <Link to='/signup'>Sign Up</Link> </span> </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;