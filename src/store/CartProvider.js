import CartContext from './cart-context';


const CartProvider = props => {
    const addItemToCartHandler = item =>  {};
    const remoteItemFromCartHanlder = id => {};
    const cartContext = {
        items: [], 
        totalAmount: 0,
        addItem: addItemToCartHandler,
        remoteItem: remoteItemFromCartHanlder
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider