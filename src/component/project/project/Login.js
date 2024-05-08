import React from 'react';
import { useNavigate } from 'react-router-dom'
import NavBar from './NavBar';
import { setCurrentUser, setAllUser } from '../store/actions/userAction';
import axios from "axios"
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


const Login = () => {

    const dis = useDispatch()

    let nav = useNavigate()

    let user = {
        name: "",
        password: ""
    }

    const check = () => {
        dis(setCurrentUser(user.password))
        if (user.password == 'ad12min34') {
            dis(setCurrentUser('ad12min34'))
            return nav('/Users')
        }
        else{
            return nav('/ListToDo ')
        }

    }
    
    const getAllUsers = async () => {
        try {
            const { data } = await axios.get("https://dummyjson.com/users")
            dis(setAllUser(data.users))
        }
        catch {
            console.log("something bad");
        }
    }

    useEffect(() => {
        getAllUsers()
    }, [])


    return (
        <div>
            <TextField onChange={(e) => user.password = e.target.value} id="outlined-basic" label="password" variant="outlined" />
            <TextField onChange={(e) => user.name = e.target.value} id="outlined-basic" label="name" variant="outlined" />
           <br/>
            <Button type="sumbit"  onClick={check} variant="outlined">Login</Button>
        </div>

    );
}

export default Login;