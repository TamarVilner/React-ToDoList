import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {
    return (<>
        <nav style={{ display: "flex" }}>
            <Link to="Users">Users</Link>
            <Link to="ListToDo">ListToDo</Link>
            <Link to="Login">Login</Link>
        </nav>
    </>);
}

export default NavBar;