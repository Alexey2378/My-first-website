import React from 'react';
import { NavLink } from 'react-router-dom';
import d from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                <div className={d.dialog}>
                    <NavLink to='/dialogs/1'>Veronika</NavLink>
                </div>
                <div className={d.dialog}>
                    <NavLink to='/dialogs/2'>Kira</NavLink>
                </div>
                <div className={d.dialog}>
                    <NavLink to='/dialogs/3'>Olga</NavLink>
                </div>
                <div className={d.dialog}>
                    <NavLink to='/dialogs/4'>Anya</NavLink>
                </div>
                <div className={d.dialog}>
                    <NavLink to='/dialogs/5'>Lesya</NavLink>
                </div>
            </div>
            <div className={d.messages}>
                <div className={d.message}>Hello!</div>
                <div className={d.message}>Hello.How are you?</div>
                <div className={d.message}>Hello,can i writing?</div>
            </div>
        </div>
    )
}

export default Dialogs;
