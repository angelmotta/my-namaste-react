import { useState } from "react";

const User = ({ name }) => {
    const [followers] = useState(10);
    const [following] = useState(0);

    return (
        <div className="user-card">
            <h4>Name: {name}</h4>
            <h4>Location: Lima, Perú</h4>
            <h4>Contact: @angelmottap</h4>
            <h4>Follwers: {followers}</h4>
            <h4>Follwing: {following}</h4>
        </div>
    );
};

export default User;
