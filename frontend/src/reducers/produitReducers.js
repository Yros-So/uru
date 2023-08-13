import {
    ALL_PRODUITS_REQUEST,
    ALL_PRODUITS_SUCCESS,
    ALL_PRODUITS_FAIL,
    ADMIN_PRODUITS_REQUEST,
    ADMIN_PRODUITS_SUCCESS,
    ADMIN_PRODUITS_FAIL,
    NEW_PRODUIT_REQUEST,
    NEW_PRODUIT_SUCCESS,
    NEW_PRODUIT_RESET,
    NEW_PRODUIT_FAIL,
    DELETE_PRODUIT_REQUEST,
    DELETE_PRODUIT_SUCCESS,
    DELETE_PRODUIT_RESET,
    DELETE_PRODUIT_FAIL,
    UPDATE_PRODUIT_REQUEST,
    UPDATE_PRODUIT_SUCCESS,
    UPDATE_PRODUIT_RESET,
    UPDATE_PRODUIT_FAIL,
    PRODUIT_DETAILS_REQUEST,
    PRODUIT_DETAILS_SUCCESS,
    PRODUIT_DETAILS_FAIL,
    NEW_REVIEW_REQUEST,
    NEW_REVIEW_SUCCESS,
    NEW_REVIEW_RESET,
    NEW_REVIEW_FAIL,
    GET_REVIEWS_REQUEST,
    GET_REVIEWS_SUCCESS,
    GET_REVIEWS_FAIL,
    DELETE_REVIEW_REQUEST,
    DELETE_REVIEW_SUCCESS,
    DELETE_REVIEW_RESET,
    DELETE_REVIEW_FAIL,
    CLEAR_ERRORS

} from '../constants/produitConstants'

export const produitsReducer = (state = { produits: [] }, action) => {
    switch (action.type) {
        case ALL_PRODUITS_REQUEST:
        case ADMIN_PRODUITS_REQUEST:
            return {
                loading: true,
                produits: []
            }

        case ALL_PRODUITS_SUCCESS:
            return {
                loading: false,
                produits: action.payload.produits,
                produitsCount: action.payload.produitsCount,
                resPerPage: action.payload.resPerPage,
                filteredProduitsCount: action.payload.filteredProduitsCount
            }

        case ADMIN_PRODUITS_SUCCESS:
            return {
                loading: false,
                produits: action.payload
            }

        case ALL_PRODUITS_FAIL:
        case ADMIN_PRODUITS_FAIL:
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

export const newProduitReducer = (state = { produit: {} }, action) => {
    switch (action.type) {

        case NEW_PRODUIT_REQUEST:
            return {
                ...state,
                loading: true
            }

        case NEW_PRODUIT_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                produit: action.payload.produit
            }

        case NEW_PRODUIT_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case NEW_PRODUIT_RESET:
            return {
                ...state,
                success: false
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

export const produitReducer = (state = {}, action) => {
    switch (action.type) {

        case DELETE_PRODUIT_REQUEST:
        case UPDATE_PRODUIT_REQUEST:
            return {
                ...state,
                loading: true
            }

        case DELETE_PRODUIT_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }

        case UPDATE_PRODUIT_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }


        case DELETE_PRODUIT_FAIL:
        case UPDATE_PRODUIT_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case DELETE_PRODUIT_RESET:
            return {
                ...state,
                isDeleted: false
            }

        case UPDATE_PRODUIT_RESET:
            return {
                ...state,
                isUpdated: false
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

export const produitDetailsReducer = (state = { produit: {} }, action) => {
    switch (action.type) {

        case PRODUIT_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case PRODUIT_DETAILS_SUCCESS:
            return {
                loading: false,
                produit: action.payload
            }

        case PRODUIT_DETAILS_FAIL:
            return {
                ...state,
                error: action.payload
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

export const newReviewReducer = (state = {}, action) => {
    switch (action.type) {

        case NEW_REVIEW_REQUEST:
            return {
                ...state,
                loading: true
            }

        case NEW_REVIEW_SUCCESS:
            return {
                loading: false,
                success: action.payload
            }

        case NEW_REVIEW_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case NEW_REVIEW_RESET:
            return {
                ...state,
                success: false
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

export const produitReviewsReducer = (state = { review: [] }, action) => {
    switch (action.type) {

        case GET_REVIEWS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case GET_REVIEWS_SUCCESS:
            return {
                loading: false,
                reviews: action.payload
            }

        case GET_REVIEWS_FAIL:
            return {
                ...state,
                error: action.payload
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

export const reviewReducer = (state = {}, action) => {
    switch (action.type) {

        case DELETE_REVIEW_REQUEST:
            return {
                ...state,
                loading: true
            }

        case DELETE_REVIEW_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }

        case DELETE_REVIEW_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case DELETE_REVIEW_RESET:
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