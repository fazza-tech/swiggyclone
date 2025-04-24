import Restaurentcard from "./Restaurentcard"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"


const Body = () => {

   const [listOfRestaurents, setListOfRestaurent] = useState([])
   const [filteredRestaurent, setFilteredRestaurent] = useState([])
   const [searchText, setSearchText] = useState("")

   useEffect(() => {
    fetchData()
   },[])

   async function fetchData(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.2587531&lng=75.78041&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json()
    setListOfRestaurent(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaurent(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    
   }
   

   if(listOfRestaurents.length === 0){
    return <Shimmer/>
 }

    return (
        <div className="body">
            <div className="search">
                <input 
                type="text"
                className="input-search"
                value={searchText}
                onChange={(e)=> {
                    setSearchText(e.target.value)
                }}
                />
                <button onClick={() => {
                    console.log(searchText)
                    const filteredRes = listOfRestaurents.filter(res => {
                        return res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    })
                    setFilteredRestaurent(filteredRes)
                    
                }}>Search</button>
            </div>
            <div className="filter">
                <button 
                onClick={() => {const filtearedRes = listOfRestaurents.filter(res => {
                    return res.info.avgRating>4.4
                } )
                    console.log(filtearedRes)
                    setFilteredRestaurent(filtearedRes)
                }
                
                }
                className="filter-button">Top rated restaurants</button>
            </div>
            <div className="res-card-container">
                {
                    filteredRestaurent.map((resList) => (<Restaurentcard key={resList.info.id} resData={resList} />))
                }
            </div>
        </div>

    )

}

export default Body