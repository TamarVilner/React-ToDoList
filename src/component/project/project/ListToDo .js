import axios from "axios";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOneTask, setAllTask, deleteTask } from '../store/actions/toDoAction';
import { setCurrentUser, setAllUser } from "../store/actions/userAction";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import p from "./12.jpg";
import pic from "./12.jpg";


const ListToDo = () => {
    const dis = useDispatch();
    const arrTasks = useSelector(u => u.task.arrTasks);
    const allUser = useSelector(p => p.users.allUser);
    let userP = useSelector(z => z.users.currentUser);
    let userC = allUser.filter(x => x.password === userP);
    let arrCurrentUser;
    if (userP !== 'ad12min34')
        arrCurrentUser = arrTasks.filter(r => r.userId === userC[0].id);
    else
        arrCurrentUser = arrTasks;

    const getAllTasks = async () => {
        try {
            const { data } = await axios.get("https://dummyjson.com/todo");
            dis(setAllTask(data.todos));
        } catch (error) {
            console.log("Error fetching tasks:", error);
        }
    };

    useEffect(() => {
        getAllTasks();
    }, []);

    const deleteTaskHandler = async (id) => {
        try {
            await axios.delete(`https://dummyjson.com/todo/${id}`);
            dis(deleteTask(id));
        } catch (error) {
            console.log("Error deleting task:", error);
        }
    };

    const finishTask = (id) => {
        dis(setOneTask(id));
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ textAlign: "center" }}>
                <h1 style={{ color: "purple" }}>Task List</h1>
                {arrCurrentUser.map(task => (
                    <div key={task.id}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={require("./12.jpg").default}
                                title="Green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {task.todo}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {task.completed.toString()}  :האם הושלמה המשימה
                                    <Typography variant="body2" color="text.secondary">
                                        <Button onClick={() => deleteTaskHandler(task.id)} color="secondary">מחק מטלה</Button>
                                        <Button onClick={() => finishTask(task.id)} color="secondary">סימתי לבצע את המטלה</Button>
                                    </Typography>
                                </Typography>
                            </CardContent>
                        </Card>
                        <br />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListToDo;
