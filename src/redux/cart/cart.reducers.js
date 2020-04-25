import CartActionTypes from './cart.types';
import { addItemToCart } from './cart.util';




const INITIAL_STATE = {  // we can connect the the mongodb database to use the contens in the database as initial state of the reducer 
    hidden: true,
    cartItems: []
};


const cartReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            
            return {
                ...state,
                hidden: !state.hidden
            }

        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }

        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id
                )
            }
    
        default:
            return state
    }
}


 
export default cartReducer;

