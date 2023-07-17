import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const MyClass = () => {
    const { user } = useContext(AuthContext);
    const [myClasses, setMyClasses] = useState([]);
    const url = `http://localhost:5000/classes?email=${user.email}`
    fetch(url)
        .then(res => res.json())
        .then(data => setMyClasses(data))
    console.log(myClasses);
    return (
        <div>
            <h1 className="text-3xl font-bold">This is my classes that i added </h1>
            {myClasses.length}

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Class Name</th>
                                <th>No.of seat</th>
                                <th>Pending</th>
                                <th>Approved</th>
                                <th>Deny</th>
                                <th>Total enrolled</th>
                                <th>Feedback</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>Class name</th>
                                <th>3</th>
                                <td>pending</td>
                                <td>approved</td>
                                <td>deny</td>
                                <td>10</td>
                                <td>feedback given</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">Update</button>
                                </th>
                            </tr>
                                                       
                           
                        </tbody>
                                                

                    </table>
                </div>
            </div>

        </div>
    );
};

export default MyClass;