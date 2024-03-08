import React from 'react'


function ViewCartFormatTemplate(viewCart){
    console.log(viewCart)
    console.log("I'm in view cart format.js")
    return(
        
        <div className="row">
            <div className="col-sm-8">
                <h7>{viewCart.itemName}</h7>
                <p>$ {viewCart.itemPrice}</p>
            </div>

            <div className="col-sm-4 text-center align-middle">
                <button type="submit" className="btn-close" aria-label="Close" onClick={() => viewCart.deleteItem(viewCart)}></button>

            </div>
        </div>
            

    )

}

export default ViewCartFormatTemplate