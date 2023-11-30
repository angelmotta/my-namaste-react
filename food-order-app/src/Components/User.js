const User = ({ name }) => {
    return (
        <div className="user-card">
            <h4>Name: {name}</h4>
            <h4>Location: Lima, Perú</h4>
            <h4>Contact: @angelmottap</h4>
        </div>
    );
};

export default User;
