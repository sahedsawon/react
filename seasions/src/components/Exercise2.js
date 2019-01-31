import React from 'react';

export default class Exercise2 extends React.Component {
    state = {
        time : null
    }

    componentDidMount() {
        setInterval( () => {
            this.setState({
                time : (new Date()).toLocaleTimeString()
            });
        },1000);
    }

    render() {
        return (
            <div className='time'>
                The time is now : {this.state.time}
            </div>
        )
    }
}