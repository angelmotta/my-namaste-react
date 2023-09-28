import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    'div',                        
    { key : "parent"}, 
    [
        React.createElement(
            'div',                    
            { key : "child1"}, 
            [
                React.createElement('h1', { key: "ch1h1" }, 'I am h1 tag'),
                React.createElement('h2', { key: "ch1h2" }, 'I am h2 tag')
            ]
        ),
        React.createElement(
            'div',                    
            { key : "child2"}, 
            React.createElement('h1', { key: "ch2h1" }, 'I am h1 tag'),
            React.createElement('h2', { key: "ch2h2" }, 'I am h2 tag')
        )
    ]
);

console.log("print parent node:")
console.log(parent); // return JS Object (React.element {type, props})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
