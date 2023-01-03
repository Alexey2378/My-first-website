import React from 'react';
import d from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {



    let DialogsElements = props.state.dialogs.map(
        (d) => <DialogItem name={d.name} id={d.id} />)


    let MessagesElements = props.state.messages.map(
        (m) => <Message message={m.message} id={m.id} />)

    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                {DialogsElements}
            </div>
            <div className={d.messages} updateNewMessageText={props.updateNewMessageText}>
                {MessagesElements} 
            </div>
        </div>
    )
}

export default Dialogs;
