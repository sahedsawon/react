import React from 'react';
import {connect}  from 'react-redux'; 
import {fetchPost} from '../../actions'
import UserHeader from './UserHeader';
import "../../assets/PostListImage.css"

class PostLists extends React.Component {

    componentDidMount() {
       this.props.fetchPost('/posts'); 
    }

    render() {
        return this.props.posts.map(post => {
            return(
                <div className="card" key={post.id}>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-1 image-container-flex">
                                <div className="image-item-flex">
                                    <i className="far fa-user"></i>
                                </div>
                            </div>
                            <div className="col-md-11">
                                <h5 className="card-title">{post.title}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{post.body}</h6>
                                <UserHeader  userId={post.userId} />
                            </div>
                        </div>
                        
                    </div>
                </div>
            )
        })
        
    }
}

const mapStatToProps = (state) => {
    return {posts : state.posts};
}

export default  connect(mapStatToProps,{fetchPost})(PostLists);