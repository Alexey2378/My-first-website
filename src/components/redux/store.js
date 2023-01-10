import dialogsReducer from "./dialogsReducer"
import profileReducer from "./profileReducer"
import sideBarReducer from "./sideBarReducer"


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
            newMessageBody: ''
        },
        sideBar: {

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

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sideBar = sideBarReducer(this._state.sideBar, action)

        this._callSubscriber(this._state);
    }
}






export default store;
window.state = store;