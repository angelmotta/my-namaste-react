import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, location } = this.props;
        return (
            <div className="user-card">
                <h4>Name: {name}</h4>
                <h4>Location: {location}</h4>
                <h4>Contact: @angelmottap</h4>
            </div>
        );
    }
}

export default UserClass;
