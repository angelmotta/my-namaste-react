import { useState } from "react";

const User = ({ name }) => {
    const [followers, setFollwers] = useState(10);
    const [following, setFollowing] = useState(0);

    return (
        <div className="user-card">
            <h4>Name: {name}</h4>
            <h4>Location: Lima, Perú</h4>
            <h4>Contact: @angelmottap</h4>
            <h4>Followers: {followers}</h4>
            <button
                onClick={() => {
                    setFollwers(followers + 1);
                }}
            >
                Followers++
            </button>
            <h4>Following: {following}</h4>
            <button
                onClick={() => {
                    setFollowing(following + 1);
                }}
            >
                Following++
            </button>
        </div>
    );
};

export default User;
