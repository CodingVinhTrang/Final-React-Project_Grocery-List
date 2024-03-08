import React from 'react'
import './style.css'
import Header from './components/Header'
import Body from './components/Body'


function App(){

    const [isShown, getIsShown] = React.useState(false);

    function toggleShown(){
        getIsShown(prevIsShown => !prevIsShown)
    }

    const [searchData, getSearchData] = React.useState([]);
    
    console.log(searchData)
    function searchBarClick (){
        event.preventDefault() 
        // getSearchData(prevSearchData => prevSearchData.filter)
        // getSearchData([...searchData, searchData])
        console.log("Searched clicked")

    }

    return (

        <div className ="container-fluid ">
            <div className="row">
                <Header isShown={toggleShown} searchData={searchBarClick}/>
                <Body toggle={isShown}/>
            </div>
                
        </div>
    )

}

export default App;