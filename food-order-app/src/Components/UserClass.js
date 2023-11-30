import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            followers: 100,
            following: 200,
        };
    }

    render() {
        const { name, location } = this.props;
        const { followers, following } = this.state;
        return (
            <div className="user-card">
                <h4>Name: {name}</h4>
                <h4>Location: {location}</h4>
                <h4>Contact: @angelmottap</h4>
                <h4>Followers: {followers}</h4>
                <h4>Following: {following}</h4>
            </div>
        );
    }
}

export default UserClass;
