import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat : null,
            lon : null
        }
    }
    render() {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({
                    lat : position.coords.latitude,
                    lon : position.coords.longitude,
                })
            },
            err => console.log(err)
        )
        return <div>
            <p> latitude : {this.state.lat} </p>
            <p> longitude : {this.state.lon} </p>
            </div>
    }
}
ReactDOM.render(<App />, document.querySelector('#root'));
