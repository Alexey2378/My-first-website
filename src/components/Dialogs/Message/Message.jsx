import React from "react";
import d from '../Dialogs.module.css'



const Message = (props) => {



    return (
        <div>
            <div>
                <div className={d.message}>{props.message}</div>
            </div>
        </div>


    )
}

export default Message;