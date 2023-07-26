import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const MyClass = () => {
    const { user } = useContext(AuthContext);
    const [myClasses, setMyClasses] = useState([]);
    
    fetch(`https://global-language-school-server-rrtechmart.vercel.app/classes?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setMyClasses(data))
    // console.log(myClasses);
    return (
        <div>
            <h1 className="text-3xl font-bold">This is my classes that I added </h1>
            {myClasses.length}

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-lg font-medium">
                                <th>Class Name</th>
                                <th>No.of seat</th>
                                <th>Status</th>
                                <th>Total enrolled</th>
                                <th>Feedback</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            {
                                myClasses.map(MyClass => <tr
                                    key={MyClass._id}
                                >
                                    <th> {MyClass.className} </th>
                                    <td> {MyClass.availableSeat} </td>
                                    <td> {MyClass.status} </td>
                                    <td>+{0}</td>
                                    <td> TODO feedback </td>
                                    <td>
                                        <button className="btn btn-ghost btn-xs">Update</button>
                                    </td>
                                </tr>)
                            }




                        </tbody>


                    </table>
                </div>
            </div>

        </div>
    );
};

export default MyClass;