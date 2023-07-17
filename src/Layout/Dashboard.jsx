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
                    <li> <Link to='/dashboard/myClass'>My selected Class</Link></li>
                    <li> <Link to='/dashboard/enrolledClass'>My enrolled Class</Link></li>
                    <li> <Link to='/dashboard/payment'> Payment </Link></li>
                    <li> <Link to='/dashboard/paymentHistory'> Payment History </Link></li>
                    <br /> <br />

                    <li> <Link to='/'> Home </Link></li>
                    <li> <Link to='/instructor'> Instructors </Link></li>
                    <li> <Link to='/class'> Classes </Link></li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;