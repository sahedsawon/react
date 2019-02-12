import React from 'react';
import PostLists from './posts/PostLists'

export default class App extends React.Component {
    render() {
        return <div className="container">
            <PostLists />
        </div>
    }
}