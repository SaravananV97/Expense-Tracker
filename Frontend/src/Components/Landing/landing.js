import React from "react";
import axios from "axios";

axios.get("/api/users/test").then(res => console.log(res.data.test));

const Landing = (props) => {
    return (

    <form action="http://localhost:5000/api/users/login">
        <input type="submit" value="Go to Google" />
    </form>

        );
}

export default Landing;

