import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [gender, setGender] = useState("Male");
const navigation = useNavigate();

const saveUser = async (e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:5000/users', {
            name, email, gender
        });
        navigation("/");
    } catch (error) {
        console.log(error);
    };
}

  return (
    <div className="columns mt-5 grid justify-items-center">
        <div className="column w-1/2">
            <form onSubmit={saveUser}>
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
                    <button className="button bg-blue-500" type='submit'>Save</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddUser
