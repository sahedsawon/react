import React from 'react';
import {connect} from 'react-redux';
import {incrementActionCreator} from '../actions'

class Increment extends React.Component {
    render() {
        return <div className="col-md-2">
        <button className="btn btn-primary" onClick={() => this.props.incrementActionCreator(this.props.reduce)}>Increment++  </button>
     </div>
    }
}

const mapStateToProps = (state) => {
    return {reduce: state.reduce};
}

export default connect(mapStateToProps,{incrementActionCreator})(Increment);