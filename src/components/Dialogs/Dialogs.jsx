import React from 'react';
import d from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../redux/dialogsReducer';

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let DialogsElements = state.dialogs.map(
        (d) => <DialogItem name={d.name} id={d.id} />)


    let MessagesElements = state.messages.map(
        (m) => <Message message={m.message} id={m.id} />)

    let newMessageBody = state.newMessageBody;



    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                {DialogsElements}
            </div>
            <div className={d.messages} updateNewMessageText={props.updateNewMessageText}>
                <div>{MessagesElements}</div>
                <div>
                    <div><textarea
                        value={newMessageBody}
                        onChange={onNewMessageChange}
                        placeholder='Enter your message'></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
