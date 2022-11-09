import { useReducer } from "react";
import { shoppingInicialState, shoppingReducer } from "../../reducer/shoppingReducer";
import { TYPES } from "../../actions/shoppingAction";
import { CartItem } from "./CartItem";

import ProductItem from "./ProductItem";

const ShoppingCart = () => {
    const [state, dispatch] = useReducer(shoppingReducer,shoppingInicialState);
    const {product, cart} = state;

    const addToCart = (id) => {
        console.log(id);
    dispatch({type:TYPES.ADD_TO_CART,playload:id})
    };
    
    console.log(product)

    const delFromCart = (id, all = false) => {
        console.log(id,all);
        if(all){
            dispatch({type:TYPES.REMOVE_ALL_FROM_CART,playload:id})
        }else{
            dispatch({type:TYPES.REMOVE_ONE_FROM_CART,playload:id})
        }
    };

    const clearCart = () => {
        dispatch({type:TYPES.CLEAR_CART});
    };
    return(
        <div>
        <h2>Carrito de Compras</h2>
        <h3>Productos</h3>
        <article className = "box">
            {product.map((products) => (<ProductItem key={products._id} data={products} addToCart={addToCart}/>))}
        </article>
        <h3>Carrito</h3>
        {/* <article className = "box">
            <button onClick={clearCart}>Limbiar Carrito</button>
            {cart.map((item, index) => (
                    <CartItem key={index} data={item} delFromCart/>
            ))}
        </article> */}
        </div>
    )
}

export default ShoppingCart
