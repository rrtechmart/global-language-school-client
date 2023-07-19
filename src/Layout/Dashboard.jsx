import { Link, Outlet } from "react-router-dom";


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
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}

                    <h3 className="text-2xl font-semibold">For User</h3>

                    <li> <Link to='/dashboard/home'>User home</Link></li>
                    <li> <Link to='/dashboard/mySelectedClass'>My selected Class</Link></li>
                    <li> <Link to='/dashboard/enrolledClass'>My enrolled Class</Link></li>
                    <li> <Link to='/dashboard/payment'> Payment </Link></li>
                    <li> <Link to='/dashboard/paymentHistory'> Payment History </Link></li>
                    <br /> 

                    <h3 className="text-2xl font-semibold">For Instructor</h3>

                    <li> <Link to='/dashboard/home'>Instructor home</Link></li>
                    <li> <Link to='/dashboard/addAClass'>Add a Class</Link></li>
                    <li> <Link to='/dashboard/myClass'>My Class</Link></li>
                    
                    <br /> 

                    <li> <Link to='/'> Home </Link></li>
                    <li> <Link to='/instructor'> Instructors </Link></li>
                    <li> <Link to='/class'> Classes </Link></li>

                    <h3 className="text-2xl font-semibold">For Admin</h3>

                    <li> <Link to='/dashboard/manageClass'> Manage Classes </Link></li>
                    <li> <Link to='/dashboard/manageUsers'> Manage users </Link></li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;