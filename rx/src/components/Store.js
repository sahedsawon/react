import React from 'react';
import {connect} from 'react-redux';

class Store extends React.Component {
    render() {
        return <div className="col-md-2">
                <button className="btn btn-small btn-disabled">{this.props.reduce}</button>
            </div>
    }
}

const mapStateToProps = (state) => {
    return {reduce: state.reduce};
}

export default connect(mapStateToProps)(Store);