const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    dialogs: [
        { id: 1, name: 'Veronika' },
        { id: 2, name: 'Kira' },
        { id: 3, name: 'Olga' },
        { id: 4, name: 'Anya' },
        { id: 5, name: 'Kristina' },
    ],
    messages: [
        { id: 1, message: 'Hello!' },
        { id: 2, message: 'Hello,how are you?' },
        { id: 3, message: 'Hello,can I writing?' },
    ],
    newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':
            state.newMessageBody = action.body;
            return state;
        case 'SEND-MESSAGE':
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({ id: 4, message: body });
            default:
            return state;
    }
}

export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY, body: body
    }
}
export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export default dialogsReducer;