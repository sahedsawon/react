import React from 'react';
import {connect}  from 'react-redux'; 
import {PostReducer} from '../../reducers/PostReducer'

class PostLists extends React.Component {
    componentDidMount() {
        
    }
    render() {
        return(
            <div>
                Post List
            </div>
        )
    }
}

export default  connect(null,{PostReducer})(PostLists) ;