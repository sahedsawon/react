import React from 'react';

const Message = props => {
    return(
        <div className="ui message">
            <div className="header">{props.headline}</div>
            <p>{props.message}</p> 
        </div>
    )
}

export default Message;