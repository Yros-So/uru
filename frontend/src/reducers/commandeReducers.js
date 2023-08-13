import {
    CREATE_COMMANDE_REQUEST,
    CREATE_COMMANDE_SUCCESS,
    CREATE_COMMANDE_FAIL,
    MY_COMMANDES_REQUEST,
    MY_COMMANDES_SUCCESS,
    MY_COMMANDES_FAIL,
    ALL_COMMANDES_REQUEST,
    ALL_COMMANDES_SUCCESS,
    ALL_COMMANDES_FAIL,
    UPDATE_COMMANDE_REQUEST,
    UPDATE_COMMANDE_SUCCESS,
    UPDATE_COMMANDE_RESET,
    UPDATE_COMMANDE_FAIL,
    DELETE_COMMANDE_REQUEST,
    DELETE_COMMANDE_SUCCESS,
    DELETE_COMMANDE_RESET,
    DELETE_COMMANDE_FAIL,
    COMMANDE_DETAILS_REQUEST,
    COMMANDE_DETAILS_SUCCESS,
    COMMANDE_DETAILS_FAIL,
    CLEAR_ERRORS
} from '../constants/commandeConstants'

export const newCommandeReducer = (state = {}, action) => {
    switch (action.type) {

        case CREATE_COMMANDE_REQUEST:
            return {
                ...state,
                loading: true
            }

        case CREATE_COMMANDE_SUCCESS:
            return {
                loading: false,
                commande: action.payload
            }

        case CREATE_COMMANDE_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}

export const myCommandesReducer = (state = { commandes: [] }, action) => {
    switch (action.type) {

        case MY_COMMANDES_REQUEST:
            return {
                loading: true
            }

        case MY_COMMANDES_SUCCESS:
            return {
                loading: false,
                commandes: action.payload
            }

        case MY_COMMANDES_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}

export const commandeDetailsReducer = (state = { commande: {} }, action) => {
    switch (action.type) {

        case COMMANDE_DETAILS_REQUEST:
            return {
                loading: true
            }

        case COMMANDE_DETAILS_SUCCESS:
            return {
                loading: false,
                commande: action.payload
            }

        case COMMANDE_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}

export const allCommandesReducer = (state = { commandes: [] }, action) => {
    switch (action.type) {

        case ALL_COMMANDES_REQUEST:
            return {
                loading: true
            }

        case ALL_COMMANDES_SUCCESS:
            return {
                loading: false,
                commandes: action.payload.commandes,
                totalAmount: action.payload.totalAmount
            }

        case ALL_COMMANDES_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}

export const commandeReducer = (state = {}, action) => {
    switch (action.type) {

        case UPDATE_COMMANDE_REQUEST:
        case DELETE_COMMANDE_REQUEST:
            return {
                ...state,
                loading: true
            }

        case UPDATE_COMMANDE_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }

        case DELETE_COMMANDE_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }

        case UPDATE_COMMANDE_FAIL:
        case DELETE_COMMANDE_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case UPDATE_COMMANDE_RESET:
            return {
                ...state,
                isUpdated: false
            }

        case DELETE_COMMANDE_RESET:
            return {
                ...state,
                isDeleted: false
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}