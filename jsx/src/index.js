//import React and ReactDOM libraries
import React from 'react'
import ReactDOM from 'react-dom'

function getButtonText() {
    return 'Click me..';
}

// create a component 
const App = () => {
    return (
        <div>
            <label htmlFor="name" className="label">Enter Name: </label>
            <input type="text" id="name" />
            <button style={{backgroundColor:'blue',color:'white'}}> {getButtonText()} </button>
        </div>
    )
}

//render component to react view
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
