
import React from 'react';
import {connect} from 'react-redux';
import {decrementActionCreator} from '../actions'

class Store extends React.Component {
    render() {
        return <div className="col-md-2">
        <button className="btn btn-primary" onClick={() => this.props.decrementActionCreator(this.props.reduce)}>Decrement-- </button>
     </div>
    }
}

const mapStateToProps = (state) => {
    return {reduce: state.reduce};
}

export default connect(mapStateToProps,{decrementActionCreator})(Store);