import React from 'react'
import GroceryDataFormat from './GroceryDataFormatTemplate'
import GroceryListData from './GroceryListData'

function GroceryListMap(props){
    console.log(props)
    // console.log(props.add)
    console.log(props.filterData)

    const GroceryList = props.filterData.map(

        (currentItem) => {
            return < GroceryDataFormat
            
            id = {currentItem.id}
            category = {currentItem.category}
            itemImage = {currentItem.itemImage}
            itemName = {currentItem.itemName}
            itemPrice = {currentItem.itemPrice}
            itemPricePerWeight = {currentItem.itemPricePerWeight}
            itemDescription = {currentItem.itemDescription}
            
            //add item to viewcart array
            add = {props.add}
            
            />
        }
    )


    return (
        
        <div className="container">
            <div className="row gy-3">
                {GroceryList}
            </div>
    
        </div>


    )

}

export default GroceryListMap