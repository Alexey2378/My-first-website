import { rerenderEntireTree } from '../../render';

let state = {
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

}
window.state = state;

export let addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
    }
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export let addMessage = () => {
    let newMessage = {
        id: 4,
        message: state.dialogsPage.newMessageText,
    }
    state.profilePage.posts.push(newMessage);
    rerenderEntireTree(state);
}
export let updateNewMessageText = (newMessage) => {
    state.dialogsPage.newMessageText = newMessage;
    rerenderEntireTree(state);
    }
export default state;