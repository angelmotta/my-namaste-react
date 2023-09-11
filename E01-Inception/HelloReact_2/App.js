/**
 * <div id=parent>
 *  <div id=child1>
 *      <h1>I am h1 tag</h1>
 *      <h2>I am h2 tag</h2>
 *  </div>
 *  <div id=child2>
 *      <h1>I am h1 tag</h1>
 *      <h2>I am h2 tag</h2>
 *  </div>
 * </div>
 */


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

console.log(parent); // return JS Object (React.element {type, props})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
