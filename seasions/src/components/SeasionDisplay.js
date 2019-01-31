import './SeassionDisplay.css';
import React from 'react';

const sessionConfig = {
    summer : {
        text :  "let's hit the see!",
        icon : 'sun'
    },
    winter : {
        text : "It's is winter. so cold!",
        icon : 'snowflake'
    }
};

const getSession = (lat,month)=> {
    if(month>2 && month < 9) {
        return lat >0 ?'summer':'winter';
    }else{
        return lat>0?'winter':'summer';
    }
}

const SeasionDisplay = props => {
    const session = getSession(props.lat,(new Date()).getMonth() );
    const {text,icon} = sessionConfig[session];
    return(
        <div>
            <i className={`icon-left massive ${icon} icon`}></i>
            <h1>{text}</h1>
            <i className={`icon-right massive ${icon} icon`}></i>
        </div>
    )
}
export default SeasionDisplay;