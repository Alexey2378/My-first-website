const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const profileReducer = (state, action) => {
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