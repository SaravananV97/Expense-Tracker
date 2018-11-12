import React from "react";
import axios from "axios";

axios.post("/api/users/test", {msg: "Hello World"}).then(res => console.log(res.data.msg));
console.log("Landing....")
const Landing = (props) => {
    return (
    <form action="http://localhost:5000/api/users/login">
        <input type="submit" value="Go to Google" />
    </form>

        );
}

export default Landing;

