import React from 'react';
import d from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogs = [
        { id: 1, name: 'Veronika' },
        { id: 2, name: 'Kira' },
        { id: 3, name: 'Olga' },
        { id: 4, name: 'Anya' },
        { id: 5, name: 'Kristina' },
    ]

    let messages = [
        { id: 1, message: 'Hello!' },
        { id: 2, message: 'Hello,how are you?' },
        { id: 3, message: 'Hello,can I writing?' },
    ]


    let DialogsElements = dialogs.map(
        (d) => <DialogItem name={d.name} id={d.id} />)


    let MessagesElements = messages.map(
        (m) => <Message message={m.message} id={m.id} />)

    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                {DialogsElements}
            </div>
            <div className={d.messages}>
                {MessagesElements}
            </div>
        </div>
    )
}

export default Dialogs;
