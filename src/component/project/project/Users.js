import axios from "axios"
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAllUser, setCurrentUser } from '../store/actions/userAction'
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import pic from "./123.jpg"

const Users = () => {

    const dis = useDispatch()
    const allUser = useSelector(u => u.users.allUser)
    console.log(allUser, "allUser");

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

    const sortByAge = () => {
        const sorted = [...allUser].sort((a, b) => a.age - b.age);
        dis(setAllUser(sorted))
    }
    const [isMale, setIsMale] = useState(false);
     const sortedMale = [...allUser].filter(x => x.gender === "male");
    const sortedFemale =[...allUser].filter(x => x.gender === "female");
    const sortByGender = () => {
        dis(setAllUser(allUser))
        if (isMale) {
            dis(setAllUser(sortedFemale));
            setIsMale(false);
        } 
        else {
            dis(setAllUser(sortedMale));
            setIsMale(true);
        }
    }
     
       const bull = (
      <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
      >
        
      </Box>
    );
       


    return (<><h1 style={{color : "purple"}}>user list</h1>
        <ul>{allUser.map(user => {
            return  <div key={user.id}>

<Card style={{}} sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {user.firstName}  {user.lastName}      </Typography>
            <Typography variant="h5" component="div">
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {user.maidenName}
            </Typography>
            <Typography variant="body2">
             {user.age}   :גיל
            </Typography>  
            <Typography variant="body2">
            {user.gender}    :מגדר
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {user.email}
             </Typography>    
             
          </CardContent>
        </Card>

        <Button onClick={sortByAge} color="secondary">סינון לפי גיל</Button>
        <Button onClick={sortByGender} color="secondary">סינון לפי מגדר</Button>

           
            </div>
        })}</ul></>);
}

export default Users;