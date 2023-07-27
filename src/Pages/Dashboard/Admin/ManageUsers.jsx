

import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const ManageUsers = () => {
    // const {user, loading} = useContext(AuthContext);
    // const [users, setUsers] = useState([]);
    // const [disable, setDisable] =useState(false);

    const handleMakeInstructor = user => {
        fetch(`https://global-language-school-server-rrtechmart.vercel.app/users/instructors/${user._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is converted into instructor`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })



    }

    const handleMakeAdmin = user => {


        fetch(`https://global-language-school-server-rrtechmart.vercel.app/users/admin/${user._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is converted into admin`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })


    }


    // useEffect(() => {
    //     fetch('https://global-language-school-server-rrtechmart.vercel.app/users')
    //         .then(res => res.json())
    //         .then(data => setUsers(data))
    // }, [])

    const [axiosSecure] = useAxiosSecure();
    const { data: users = [] } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })



    return (
        <div>
            <h1 className="text-3xl font-bold">All users are here who are registered</h1>
            {users.length}

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="text-base text-black font-semibold">SL</th>
                            <th className="text-base text-black font-semibold">Name</th>
                            <th className="text-base text-black font-semibold">Email</th>
                            <th className="text-base text-black font-semibold">User role</th>
                            <th className="text-base text-black font-semibold">Make Instructor</th>
                            <th className="text-base text-black font-semibold">Make Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, index) => <tr
                                key={user._id}
                            >
                                <th> {index + 1} </th>
                                <td>{user.name}</td>
                                <td> {user.email} </td>
                                <td> {user?.role === 'instructor' || user?.role === 'admin' ? user.role : 'student'}
                                </td>

                                <td> <button className="bg-lime-400 p-1 rounded-md" onClick={() => handleMakeInstructor(user)} > Make Instructor</button>
                                </td>

                                <td><button className="bg-lime-600 p-1 rounded-md" onClick={() => handleMakeAdmin(user)}> Make Admin</button></td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageUsers;