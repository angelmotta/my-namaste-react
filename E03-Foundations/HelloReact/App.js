import React from "react";
import ReactDOM from "react-dom/client";

// Create a React Element using React.createElement
// ReactElement ==> JS Object ==> render by ReactDOM ==> Html element
const heading = React.createElement(
    "h1",
    { id: "heading" },
    "Namaste React 🚀"
);

// Create a React Element using JSX
// JSX is HTML-like syntax to create a React Element (JS Object)
//const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>; // React Element
const jsxText = <h2>h2 title en React Element usando JSX</h2>;

// Nested react elements
const jsxContainer = (
    <div>
        {jsxText}
        Text React Element using JSX
    </div>
);

// React Functional Component
const Title = () => (
    <h1 className="heading">
        This title will be nested inside other component
    </h1>
);

// React Functional Component
const HeadingComponent = () => (
    <div>
        <Title />
        {Title()}
        <h1 className="heading">Content from a React Functional Component</h1>
        {jsxContainer}
    </div>
);

// Create the root of the React app
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render a React Element inside the root (replace existing html content if is neccesary)
//root.render(jsxHeading); // React Element
root.render(<HeadingComponent />); // React Functional Component
