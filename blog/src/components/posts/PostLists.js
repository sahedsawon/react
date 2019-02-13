import React from 'react';
import {connect}  from 'react-redux'; 
import {fetchPost} from '../../actions'

class PostLists extends React.Component {
    componentDidMount() {
       this.props.fetchPost('/posts'); 
    }
    render() {
        return(
            <div>
                Post List
            </div>
        )
    }
}

export default  connect(null,{fetchPost})(PostLists) ;