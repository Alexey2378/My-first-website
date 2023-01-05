let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hello,how are you' },
                { id: 2, message: 'It is my first post' }
            ],
            newPostText: 'Rena-nail.com'

        },
        dialogsPage: {
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
            newMessageText: 'nail.com'
        }
    },
    _callSubscriber() {
        console.log('state is change')
    },
    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    addMessage() {
        let newMessage = {
            id: 4,
            message: this._state.dialogsPage.newMessageText,
        }
        this._state.profilePage.posts.push(newMessage);
        this._callSubscriber(this._state);
    },
    updateNewMessageText(newMessage) {
        this._state.dialogsPage.newMessageText = newMessage;
        this._callSubscriber(this._state);
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }

    }
}




export default store;
window.state = store;