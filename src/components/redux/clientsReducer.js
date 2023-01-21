import { type } from "@testing-library/user-event/dist/type";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_CLIENTS = 'SET_CLIENTS';


let initialState = {
   clients: []
}
const clientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                clients: state.clients.map(c => {
                    if (c.id === action.clientId)
                        return { ...c, followed: true }
                    return c;
                }),
            }
        case 'UNFOLLOW':
            return {
                ...state,
                clients: state.clients.map(c => {
                    if (c.id === action.clientId)
                        return { ...c, followed: false }
                    return c;
                })
            }
        case 'SET_CLIENTS':
            return {
                ...state,
                clients: [...state.clients, ...action.clients]
            }
        default:
            return state;
    }
}

export const followAC = (clientId) => ({ type: FOLLOW, clientId })
export const unfollowAC = (clientId) => ({ type: UNFOLLOW, clientId })
export const setClientsAC = (clients) => ({ type: SET_CLIENTS, clients })


export default clientsReducer;