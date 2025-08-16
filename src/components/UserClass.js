import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props); 
        this.state = {
            userInfo: {
                name: "dummyName",
                location: "default",
                id: 123,
                //avatar_url: "https://dummy_photo.com"
            }
        }  
    }
    
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/Hari-Prasanth-J-26");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo: json
        })
    }

    render() {
        const {name, location, id, avatar_url} = this.state.userInfo;
        return (
            <div className="user-card">
                <h3>Name: {name}</h3>
                <h3>Location: {location}</h3>
                <h3>Id: {id}</h3>
                <img src={avatar_url}></img>
            </div>
        )
    }
}

export default UserClass;