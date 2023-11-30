import User from "./User";
import UserClass from "./UserClass";

const Nosotros = () => {
    return (
        <div>
            <h1>El team</h1>
            <User name={"Angel Motta (func)"} />
            <UserClass name={"Angel Motta (cl)"} location={"Lima, Perú"} />
        </div>
    );
};

export default Nosotros;
