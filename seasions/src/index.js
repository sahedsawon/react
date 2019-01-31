import React from 'react';
import ReactDOM from 'react-dom';
import SeasionDispllay from './components/SeasionDisplay'

import Exercise2 from './components/Exercise2';

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
                })
            },
            err => console.log(err)
        )
        return <div>
                <SeasionDispllay lat={this.state.lat}/>
            </div>
    }
}
ReactDOM.render(<Exercise2 />, document.querySelector('#root'));
