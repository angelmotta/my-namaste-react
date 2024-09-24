import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            followers: 100,
            following: 200,
            userInfo: {
                name: "Loading name ...",
                location: "Loading location ...",
            },
        };
        console.log(
            `${this.props.name} Child Constructor UserClass components called`
        );
    }

    async componentDidMount() {
        console.log(`${this.props.name} Child UserClass Component Did Mount!`);
        // API Calls here
        const data = await fetch(`https://api.github.com/users/angelmotta`);
        const jsonData = await data.json();
        console.log(jsonData);
        // update state
        this.setState({
            userInfo: jsonData,
        });
        console.log(this.state);
    }

    render() {
        console.log(`${this.props.name} - Child Render UserClass component`);
        console.log(this.state);
        // const { name, location } = this.props;
        const { name, location, avatar_url } = this.state.userInfo; // state data from API Call
        const { followers, following } = this.state;

        return (
            <div className="user-card">
                <h4>Name: {name}</h4>
                <h4>Location: {location}</h4>
                <h4>Contact: @angelmottap</h4>
                <img src={avatar_url}></img>
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
