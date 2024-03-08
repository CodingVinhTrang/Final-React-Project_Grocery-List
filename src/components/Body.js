import React from 'react'
import GroceryListMap from './GroceryListMap'
import ViewCartFormatTemplate from './ViewCartFormatTemplate'
import CartDataMap from './ViewCartDataMap'
import VegataUltraAdHolder from './images/vegeta.mp4'
import {v4 as uuidv4} from 'uuid';
import GroceryListData from './GroceryListData'

uuidv4()


function Body(toggle){
    const [checkout, setCheckout] = React.useState([])
    const [filterGroceryListData, setFilterGroceryListData] = React.useState(GroceryListData)

    console.log(filterGroceryListData)

    const filterMap = [...new Set(filterGroceryListData.map ((currentCatItem) => currentCatItem.category))] 
    console.log(filterMap)


    const filterItem = (activeCategory) => {
        console.log(activeCategory)

        const updateFilterItems = filterGroceryListData.filter ((updateFilter) => updateFilter.category === activeCategory)
        console.log(updateFilterItems)
        setFilterGroceryListData(updateFilterItems)
        // console.log(updateFilterItems)

    }
        
    console.log(checkout)

    console.log(toggle)

    function addItemToCheckout(groceryItem) {
        console.log(groceryItem)
        setCheckout((prevCheckout) => [...prevCheckout, {
            id: uuidv4(),
            category: groceryItem.category,
            itemImage: groceryItem.itemImage,
            itemName: groceryItem.itemName,
            itemPrice: groceryItem.itemPrice,
            itemPricePerWeight: groceryItem.itemPricePerWeight,
            itemDescription: groceryItem.itemDescription
        }])
        console.log(checkout)
    }

    function removeItem(currentItem){

        // (checkout) => {
            
        //     for (let i=0; i <checkout.length; i++){
        //     const currentObject = checkout[i];

        //         if(currentObject.itemName === checkout.itemName && currentObject.itemPrice === checkout.itemPrice){
        //             setCheckout(prevCheckout => prevCheckout.filter())
        //         }else{
        //         }
        //     }
        // }

        console.log("i'm clicked");
        console.log(currentItem);
        console.log();

        setCheckout((prevCheckout) => prevCheckout.filter((item) => item.id !== currentItem.id))

    }


    return(
        <div className="container-fluid">
            <div className="row">
                <BodyHeader filterMap={filterMap} filterItem={filterItem} data={GroceryListData} filterData={setFilterGroceryListData}/>
  
            </div>

            <div className="row">
                <ItemList add={addItemToCheckout} filterData={filterGroceryListData}/>
                <Body2ViewCartSide data={checkout} toggleCart={toggle.toggle} deleteItem={removeItem}/>
            </div>

        </div>
    )
    

}

function BodyHeader (props){
    console.log(props)

    console.log(props.filterMap)
    return(
        <div className="row">
            <div className="col-sm-9 col-7 text-center">
                <h1>Welcome to Bargain Shopping</h1>
            </div>
            
            <div className="dropdown col-sm-1 col-7 text-center p-2">
                <button className="btn btn-info dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Filter
                </button>

                <ul class="dropdown-menu">
                    {/* <li><a class="dropdown-item" href="#">Categories</a></li> */}

                    {props.filterMap.map(mapFilter => ( 
                    <li><a className="dropdown-item" href="#" onClick={() => props.filterItem(mapFilter)}>{mapFilter}</a></li>
                    ))}
                   
                    <li><a className="dropdown-item text-center" href="#" onClick={() => props.filterData(props.data)}>All</a></li>

                </ul>
                
            </div>
        
        </div>
    )
}

function Body2ViewCartSide(props){
 console.log(props)


    let total = props.data.reduce((prevTotal, currentTotal) => 
    {
        return prevTotal + currentTotal.itemPrice;}, 0
    );

    console.log(total)
    console.log(props.toggleCart)
    console.log(props.deleteItem)
    return(
    
        <div className="col-sm-3 card p-0">
            {!props.toggleCart > props.toggleCart && <video src={VegataUltraAdHolder} autoPlay loop muted className="col-sm-12 object-fill"></video>}
            {props.toggleCart && <div className="bg-light" >
                <h1 className="text-center bg-info">Your Cart({props.data.length})</h1>

                <div className="itemAdded">

                    <CartDataMap cartItems = {props.data} deleteItem={props.deleteItem}/>

                    {/* <p>testing</p> */}

                </div>

                <div className="total">
                    <h4 className="card bg-info">TOTAL</h4>
                    <div className="subTotal">
                        <h5>Subtotal: $ {total.toFixed(2)}</h5>
                        <h5>Tax Percent: 7%</h5>
                        <h5 className="pb-3 border-3 mb-3 border-dark border-dashed">Tax: $ {(total.toFixed(2)*.07).toFixed(2)}</h5>
                        <h5 className="mb-3">Total: $ {(total.toFixed(2)*1.07).toFixed(2)} </h5>
                        <div className="row col-sm-5 mx-auto">
                            <button type="button" className="btn btn-info">Pay</button>
                                    
                        </div>
                    </div>
                </div>
            </div>}
        </div>

    )
}

function ItemList(props){
    console.log(props)
    return(
        <div className="col-sm-9">
            <GroceryListMap add={props.add} filterData={props.filterData}/>

        </div>
    )
}



export default Body