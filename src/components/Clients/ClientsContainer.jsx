import React from 'react';
import { connect } from 'react-redux';
import { followAC, setClientsAC, unfollowAC } from '../redux/clientsReducer';
import Clients from './Clients';


let mapStateToProps = (state) => {
    return {
        clients: state.clientsPage.clients
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (clientId) => {
            dispatch(followAC(clientId))
        },
        unfollow: (clientId) => {
            dispatch(unfollowAC(clientId))
        },
        setClients: (clients) => {
            dispatch(setClientsAC(clients))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Clients);