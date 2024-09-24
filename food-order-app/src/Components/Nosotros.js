import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class Nosotros extends React.Component {
    constructor(props) {
        console.log("Parent Constructor: Nostros called");
        super(props);
    }

    componentDidMount() {
        console.log("Parent: Component Did Mount (API Calls)");
        // API Calls here
    }

    render() {
        console.log("Parent Nosotros Class component: Render");
        return (
            <div>
                <h1>Nosotros Class component</h1>
                {/* <User name={"Angel Motta (func)"} /> */}
                <UserClass name={"Angel Motta (cl)"} location={"Lima, Perú"} />
            </div>
        );
    }
}

// const Nosotros = () => {
//     return (
//         <div>
//             <h1>El team</h1>
//             <User name={"Angel Motta (func)"} />
//             <UserClass name={"Angel Motta (cl)"} location={"Lima, Perú"} />
//         </div>
//     );
// };

export default Nosotros;
