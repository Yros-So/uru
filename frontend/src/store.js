import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

import { produitsReducer, newProduitReducer, produitReducer, produitDetailsReducer, newReviewReducer, produitReviewsReducer, reviewReducer } from './reducers/produitReducers'
import { authReducer, userReducer, forgotPasswordReducer, allUsersReducer, userDetailsReducer } from './reducers/userReducers'
import { cartReducer } from './reducers/cartReducers'
import { newCommandeReducer, myCommandesReducer, commandeDetailsReducer, allCommandesReducer, commandeReducer } from './reducers/commandeReducers'

const reducer = combineReducers({
    produits: produitsReducer,
    produitDetails: produitDetailsReducer,
    newProduit: newProduitReducer,
    produit: produitReducer,
    produitReviews: produitReviewsReducer,
    review: reviewReducer,
    auth: authReducer,
    user: userReducer,
    allUsers: allUsersReducer,
    userDetails: userDetailsReducer,
    forgotPassword: forgotPasswordReducer,
    cart: cartReducer,
    newCommande: newCommandeReducer,
    myCommandes: myCommandesReducer,
    allCommandes: allCommandesReducer,
    commandeDetails: commandeDetailsReducer,
    commande: commandeReducer,
    newReview: newReviewReducer
})


let initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems'))
            : [],
        shippingInfo: localStorage.getItem('shippingInfo')
            ? JSON.parse(localStorage.getItem('shippingInfo'))
            : {}
    }
}

const middlware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlware)))

export default store;