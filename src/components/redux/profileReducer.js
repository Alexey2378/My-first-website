const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    posts: [
        { id: 1, message: 'Hello,how are you' },
        { id: 2, message: 'It is my first post' }
    ],
    newPostText: 'Rena-nail.com'
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: 3,
                message: state.newPostText,
            }
            state.posts.push(newPost);
            state.newPostText = '';

            return state;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText;
        default:
            return state;
    }
}
export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
}

export default profileReducer;
