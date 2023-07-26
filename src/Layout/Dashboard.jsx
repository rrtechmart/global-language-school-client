import { Link, Outlet } from "react-router-dom";
import { FaAlipay, FaBookReader, FaBookmark, FaChalkboardTeacher, FaCheck, FaHistory, FaHome, FaPlus, FaUserCheck, FaUsersCog } from "react-icons/fa";


const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open my-10">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}

                <Outlet></Outlet>


                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-red-200 rounded-e text-base-content">
                    {/* Sidebar content here */}

                    <h3 className="text-2xl font-semibold">For User</h3>

                    <li> <Link to='/dashboard/home'> <FaHome></FaHome> User home</Link></li>
                    <li> <Link to='/dashboard/mySelectedClass'> <FaCheck></FaCheck> My selected Class</Link></li>
                    <li> <Link to='/dashboard/enrolledClass'> <FaBookmark></FaBookmark> My enrolled Class</Link></li>
                    <li> <Link to='/dashboard/payment'><FaAlipay></FaAlipay> Payment </Link></li>
                    <li> <Link to='/dashboard/paymentHistory'><FaHistory></FaHistory> Payment History </Link></li>
                    <br /> 

                    <h3 className="text-2xl font-semibold">For Instructor</h3>

                    <li> <Link to='/dashboard/home'><FaHome></FaHome> Instructor home</Link></li>
                    <li> <Link to='/dashboard/addAClass'> <FaPlus></FaPlus>Add a Class</Link></li>
                    <li> <Link to='/dashboard/myClass'><FaBookReader></FaBookReader> My Class</Link></li>
                    
                    <br /> 

                    <li> <Link to='/'><FaHome></FaHome> Home </Link></li>
                    <li> <Link to='/instructor'> <FaChalkboardTeacher></FaChalkboardTeacher> Instructors </Link></li>
                    <li> <Link to='/class'><FaBookReader></FaBookReader> Classes </Link></li>

                    <h3 className="text-2xl font-semibold">For Admin</h3>

                    <li> <Link to='/dashboard/manageClass'><FaUserCheck></FaUserCheck> Manage Classes </Link></li>
                    <li> <Link to='/dashboard/manageUsers'><FaUsersCog></FaUsersCog> Manage users </Link></li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;