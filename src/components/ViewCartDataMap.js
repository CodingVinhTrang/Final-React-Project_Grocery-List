import React from 'react'
// import {dataToCart} from './GroceryDataFormatTemplate'
import ViewCartFormatTemplate from './ViewCartFormatTemplate'




function CartData(props){
    // const [combinedAddedDataArray, setCombinedAddedDataArray] = React.useState([])

    // const [combinedArray, dataToCart] = React.useState([])
    console.log(props)
    console.log("I'm in viewCartData.js")
    console.log(props.deleteItem)
    // console.log(dataToCart)

    const viewCart = props.cartItems.map(
        
        (currentCartItem) => {
            return < ViewCartFormatTemplate

            id = {currentCartItem.id}
            category = {currentCartItem.category}
            itemImage = {currentCartItem.itemImage}
            itemName = {currentCartItem.itemName}
            itemPrice = {currentCartItem.itemPrice}
            itemPricePerWeight = {currentCartItem.itemPricePerWeight}
            itemDescription = {currentCartItem.itemDescription}

            deleteItem = {props.deleteItem}
            />
        }
    )

    return(
       <div>
        {viewCart}
       </div>
    )
   

}

export default CartData