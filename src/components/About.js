import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {

constructor(props) {
    super(props);
    
}

componentDidMount() {
    
}

render() {
    
    return (
        <div className="about">
            <h1>This is About us page</h1>
            <UserContext.Consumer>
                {({loggedInUser}) => (
                    <h1>{loggedInUser}</h1>
                )}

            </UserContext.Consumer>
            <User />
            <UserClass name={"Hari Prasanth (class)"}/>
        </div>
        )   
    }
}

export default About;