import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [gender, setGender] = useState("Male");
const navigation = useNavigate();
const {id} = useParams();

useEffect(() =>{
    getUserById();
},[]);

const updateUser = async (e) => {
    e.preventDefault();
    try {
        await axios.patch(`http://localhost:5000/users/${id}`, {
            name, email, gender
        });
        navigation("/");
    } catch (error) {
        console.log(error);
    };
};

const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    setName(response.data.name);
    setEmail(response.data.email);
    setGender(response.data.gender);
};

  return (
    <div className="columns mt-5 grid justify-items-center">
        <div className="column w-1/2">
            <form onSubmit={updateUser}>
                <div className="field">
                    <label className="label">Name</label>
                        <div className="control">
                            <input 
                                type="text" 
                                className="input" 
                                value={name}
                                onChange={(e) => setName(e.target.value)} 
                                placeholder='Name'/>
                        </div>
                </div>
                <div className="field">
                    <label className="label">Email</label>
                        <div className="control">
                            <input 
                                type="text" 
                                className="input" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} 
                                placeholder='Email'/>
                        </div>
                </div>
                <div className="field">
                    <label className="label">Gender</label>
                        <div className="control">
                            <div className="select w-full">
                                <select 
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                        </div>
                </div>
                <div className="field">
                    <button className="button bg-blue-500" type='submit'>Update</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default EditUser;
