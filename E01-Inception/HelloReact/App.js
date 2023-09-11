const myheading = React.createElement(
    'h1',                        // type
    { id : "heading", abc: "value" }, // props {id: "heading", abc: "value", children: "Hello World using React!!"}
    'Hello World using React!!'     // props children
);

console.log(myheading); // return JS Object (React.element {type, props})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myheading);
