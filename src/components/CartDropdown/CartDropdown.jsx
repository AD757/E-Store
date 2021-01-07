import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CartItem from "../CartItem/CartItem";
import { selectCartItems } from "../../redux/cart/cartSelectors";
import { toggleCartDropdown } from "../../redux/cart/cartActions";


import {CartDropdownContainer,CartDropdownButton,EmptyMessageContainer,CartItemsContainer} from './CartDropdown.styles';


const CartDropDown = ({cartItems,history,dispatch,match})=>{
    console.log(history,match);
    return(
        <CartDropdownContainer>
        <CartItemsContainer>
         {  cartItems.length? 
            cartItems.map(cartItem=>{
            return <CartItem id={cartItem.id} item={cartItem} key={cartItem.id} />
            })
            :
            <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
         }
        </CartItemsContainer>
        <CartDropdownButton onClick={()=>{
            history.push('/checkout');
            dispatch(toggleCartDropdown ())}}
        >Checkout</CartDropdownButton>
    </CartDropdownContainer>
    );
}


const mapStateToProps =createStructuredSelector({
 cartItems:selectCartItems
});


export default withRouter(connect(mapStateToProps)(CartDropDown));