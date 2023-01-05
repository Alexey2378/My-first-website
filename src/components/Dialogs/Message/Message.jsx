import React from "react";
import d from '../Dialogs.module.css'



const Message = (props) => {

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessage();
        props.updateNewMessageText('');
    }
    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    }

    return (
        <div>
            <div>
                <div className={d.message}>{props.message}</div>
            </div>
            <div>
                <textarea onChange={onMessageChange}
                    ref={newMessageElement}
                    value={props.newMessageText}

                />
                <button onClick={addMessage}>Write</button>
            </div>

        </div>


    )
}

export default Message;