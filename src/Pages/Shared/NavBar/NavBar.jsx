import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";


const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .then(error => console.log(error))
    }

    const navOptions = <>
        <Link className=" text-lg font-semibold mr-4" to='/'>Home</Link>
        <Link className=" text-lg font-semibold mr-4" to='/instructor'>Instructors</Link>
        <Link className=" text-lg font-semibold mr-4" to='/class'>Classes</Link>



        {
            user ? <>
                <Link className=" text-lg font-semibold mr-4" to='/dashboard'>Dashboard</Link>
                <input onClick={handleLogOut} className="text-lg font-semibold ml-4 mr-10" type="submit" value="Log Out" />
                

                <img src="#" alt="userIMG" />
            </> : <>
                <Link className=" text-lg font-semibold ml-4" to='/login'>Login</Link>
            </>
        }
    </>
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                            {navOptions}

                        </ul>
                    </div>
                    <a className="btn btn-ghost font-semibold normal-case text-2xl">
                        Global Language School
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        {navOptions}

                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>

        </>
    );
};

export default NavBar;