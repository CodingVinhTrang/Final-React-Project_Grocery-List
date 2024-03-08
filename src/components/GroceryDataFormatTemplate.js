import React from 'react'
import CartData from './ViewCartDataMap'


function GroceryFormatTemplate(GroceryList){
    // const [dataToCart, setDataToCart] = React.useState([])
    // //send dataToCart over to ViewCartData.js

    // console.log(dataToCart)
    // console.log(GroceryList)
    
    return(
        
        <div className="col-sm-3 col-sm" >

            <div className="card h-100" >
                    <div className="container">
                        <img className="card-img-top " src={GroceryList.itemImage} alt="Card image cap"/>
                    </div>

                <div className="card-body">
                    <h2>{GroceryList.itemName}</h2>
                    <h5>$ {GroceryList.itemPrice}</h5>
                    <h7>{GroceryList.itemPricePerWeight}</h7>
                    <p className="card-text">{GroceryList.itemDescription}</p>
                </div>

                <div className="text-center card-footer">
                    {/* <button type="submit" className="text-muted btn btn-primary" onClick={handleAddToCart}>Add</button> */}
                    <button type="submit" className="text-muted btn btn-primary" onClick={()=> GroceryList.add(GroceryList)}>Add</button>
                </div>
            </div>
        </div>
    )

    

    // function handleAddToCart(event){

    //     event.preventDefault()
    //     setDataToCart ([...dataToCart, GroceryList])
    //     // event(prev)

    //     return(
    //     < CartData addedArrayToViewCart={dataToCart}/>


    //     )
        
    // }

    
    


}


export default GroceryFormatTemplate