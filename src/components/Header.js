import React from 'react'
import BargainShopLogo from './images/bargainshoplogo.png'


function Header(props){
    console.log(props)
    console.log(props.isShown)
    console.log(props.searchData)

    return(

            
        <div className="container-fluid bg-info">
            <div className="row"> 
                <Logo />
                <SearchBar search={props.searchData}/>
                <NavBarViewCart toggle={props.isShown} />
            </div>
        </div>

    )
}

function Logo(){
    return(

        <div className="col-sm-4 navbar ">
            <ul classname="list-group list-group-horizontal">
                <a href="">
                    <li className ="list-group-item" ><img src={BargainShopLogo} alt="Bargain Shop Logo" width="300px" height="auto" ></img></li>
                </a>
            </ul>
        </div>

    )
}

function NavBarViewCart(props){

    return(

        <div className="col-sm-3 navbar ">
            <ul className="list-group list-group-horizontal position-absolute bottom-0 end-0 translate-middle-y">
                {/* <button type="button" className ="list-group-item" onClick="">View Cart</button> */}
                <button type="button" className ="list-group-item" onClick={()=>props.toggle()}>View Cart</button>
            </ul>
        </div>

    )
}

function SearchBar(props){
    return(

        <form onSubmit={() => props.search()} class="d-flex navbar col-sm-4" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit">Search</button>
            {/* <button class="btn btn-outline-success" type="submit" onClick={() => props.search()}>Search</button> */}
        </form>

    )
}

export default Header