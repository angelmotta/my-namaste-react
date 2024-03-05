import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            followers: 100,
            following: 200,
        };
        console.log(
            `${this.props.name} Child Constructor UserClass components called`
        );
    }

    componentDidMount() {
        console.log(`${this.props.name} Child UserClass Component Did Mount!`);
        // API Calls here
    }

    render() {
        console.log(`${this.props.name} - Child Render UserClass component`);
        const { name, location } = this.props;
        const { followers, following } = this.state;
        return (
            <div className="user-card">
                <h4>Name: {name}</h4>
                <h4>Location: {location}</h4>
                <h4>Contact: @angelmottap</h4>
                <h4>Followers: {followers}</h4>
                <button
                    onClick={() => {
                        this.setState({
                            followers: this.state.followers + 1,
                        });
                    }}
                >
                    Followers++
                </button>
                <h4>Following: {following}</h4>
                <button
                    onClick={() => {
                        this.setState({
                            following: this.state.following + 1,
                        });
                    }}
                >
                    Follow++
                </button>
            </div>
        );
    }
}

export default UserClass;
