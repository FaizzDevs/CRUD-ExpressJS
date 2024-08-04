import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserList = () => {
const [users, setUser] = useState([]);

useEffect(() => {
    getUsers();
},[]);

const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUser(response.data);
};

const deleteUser = async (id) => {
    try {
        await axios.delete(`http://localhost:5000/users/${id}`);
        getUsers();
    } catch (error) {
        console.log(error);
    }
}

  return (
    <div className="columns mt-5 grid justify-items-center">
        <div className="column relative overflow-x-auto shadow-md">
            <Link to={`add`} className='button text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>AddNew +</Link>
            <table className='table mt-2 w-full text-sm text-left rtl:text-right text-gray-500'>
                <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
                    <tr className='border-b-2 border-b-white'>
                        <th scope='col' className='px-6 py-3 font-bold text-black'>No</th>
                        <th scope='col' className='px-6 py-3 font-bold text-black'>Name</th>
                        <th scope='col' className='px-6 py-3 font-bold text-black'>Email</th>
                        <th scope='col' className='px-6 py-3 font-bold text-black'>Gender</th>
                        <th scope='col' className='px-6 py-3 font-bold text-black'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                    <tr key={user.id} className='bg-white border-b hover:bg-gray-50'>
                        <td className='px-6 py-4 text-black'>{index + 1}</td>
                        <td className='px-6 py-4 text-black'>{user.name}</td>
                        <td className='px-6 py-4 text-black'>{user.email}</td>
                        <td className='px-6 py-4 text-black'>{user.gender}</td>
                        <td className='px-6 py-4 text-black'>
                            <Link 
                            to={`edit/${user.id}`}
                            className='button mr-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' >Edit</Link>
                            <button onClick={() => deleteUser(user.id)} className='button bg focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'>Hapus</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default UserList
