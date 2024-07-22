import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count: 0,
            userInfo:{
                name:"Dummy",
                location:"Default",
            }
        }
        // console.log(this.props.name+"child constructor")
    }
    async componentDidMount(){
        // console.log(this.props.name+"child Component Did Mount");
        //componentDidMount is used to make an api call.
        const data= await fetch(" https://api.github.com/users/lionkingchuja");
        const json= await data.json();

        this.setState({
            userInfo: json,
        });
        console.log(json);
    }

    componentDidUpdate(){
        console.log("Component did update");
    }
    componentWillUnmount(){
        console.log("Component will Unmount")
    }

    render(){
        // console.log(this.props.name+"child Render")

        const { name, location, avatar_url }=this.state.userInfo;
        return(
            <div className="user-card">
                <h1>Count : {this.state.count}</h1>
                <button onClick={()=>{
                    // Never Update State Variables Directly
                    //this.setState=this.setState +1.
                    this.setState({
                        count: this.state.count +1,
                    });
                }}
                >
                    Count Increases
                </button>
                <img src={avatar_url}/>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: lionkingchuja</h4>
            </div>
        );
    }
}

/*
    -Parent Constructor
    -Parent render
        -vivek Constructor
        -vivek render

        -amit Constructor
        -amit render

        -lion Constructor
        -lion render

        -vivek ComponentDidMount
        -amit ComponentDidMount
        -lion ComponentDidMount

    - Parent ComponenetDidMount

*/

export default UserClass;

/* ****************************************************************
 *
 *
 * ----- Mounting CYCLE -----
 *   Constructor (dummy)
 *   Render (dummy)
 *       <HTML Dummy></HTML>
 *   Component Did Mount
 *       <API Call>
 *       <this.setState> - State variable is updated
 *
 * ----- UPDATE CYCLE -----
 *       render(API data)
 *       <HTML (new API data)>
 *   Component Did Update
 *   Component Will Unmount
 *
 *
 * Life Cycle Diagram Website Reference: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
 */
