import React from "react";
import ReactDOM from "react-dom/client";

// React Element using createElement
const parent = React.createElement("div", { className: "title" }, [
    React.createElement("h1", { key: "1" }, "I am h1 tag"),
    React.createElement("h2", { key: "2" }, "I am h2 tag"),
    React.createElement("h3", { key: "3" }, "I am h3 tag"),
]);

// React Element using JSX
const h4Elem = <h4>H4 Tag</h4>;

// Inner React Function Component
const Myh3Component = () => {
    return <h3>H3 Tag</h3>;
};

// Using React Functional Component
const ParentComponent = () => (
    <div className="title">
        <h1 key="1">h1 Tag</h1>
        <h2 key="2">h2 Tag</h2>
        <Myh3Component />
        {h4Elem}
    </div>
);

const rootElem = document.getElementById("root");
const root = ReactDOM.createRoot(rootElem);
root.render(<ParentComponent />);
