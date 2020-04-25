export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existitingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if(existitingCartItem) {
            return cartItems.map(cartItem => 
                cartItem.id === cartItemToAdd.id 
                ? { ...cartItem, quantity: cartItem.quantity + 1} : // if the item to add already exist  in the cart then it renders a new object with a quanity value

                   cartItem 
                
        )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}]



}