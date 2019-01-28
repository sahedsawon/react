import React from 'react'
import ReactDOM from 'react-dom';
import CommentDetail from './components/CommentDetail';
import ApprovalCard from './components/ApprovalCard';
import Message from './components/Practise/Message'
import Segment from './components/Practise/Segment';
const App = () => {
    return (
      
        <div className="ui container comments">
        <Message headline="Caution!" message="We just updated our privacy policy!" />
          <ApprovalCard>
           <CommentDetail author="Sahadat" timeAgo="Today at 04:45 PM" content="A Real Hero!" />
          </ApprovalCard>
          <ApprovalCard>
            <CommentDetail author="Sahed" timeAgo="Today at 11:45 PM" content="Not a bad man!"/>
          </ApprovalCard>
          <ApprovalCard>
            <CommentDetail author="Imran" timeAgo="Today at 04:45 AM" content="Our Sweet little brother."/>
          </ApprovalCard>
        <Segment>
          <div className="ui icon header">
            <i className="pdf file outline icon"></i>
            No documents are listed for this customer!
          </div>
          <div className="ui primary button">Add document</div>
        </Segment>
        <Segment>
          <div className="ui  header">
            For your Information
          </div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
        </Segment>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);