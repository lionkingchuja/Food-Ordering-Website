import React, { Component } from "react";
import UserClass from "./UserClass";
// import User from "./User";

class About extends Component{
    constructor(props){
        super(props);
        console.log("Parent constructor")
    }
    componentDidMount(){
        console.log("Parent Component Did Mount");
    }
    render(){
        console.log("Parent Render")
        return(
            <div>
                <h1>About us</h1>
                <h2>This is About page</h2>
                {/* <User name={"vivek kumar(function)"} location={"gaya (function)"}/> */}
                <UserClass name={"vivek kumar(class)"} location={"gaya (class)"}/>
                {/* <UserClass name={"amit kumar(class)"} location={"gaya (class)"}/> */}
                {/* <UserClass name={"lion kumar(class)"} location={"gaya (class)"}/> */}
            </div>
        );
    }
}

export default About;