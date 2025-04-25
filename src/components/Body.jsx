import Restaurentcard from "./Restaurentcard"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { ALL_RESTAURENT } from "../utils/links"
import { Link } from "react-router-dom"


const Body = () => {

   const [listOfRestaurents, setListOfRestaurent] = useState([])
   const [filteredRestaurent, setFilteredRestaurent] = useState([])
   const [searchText, setSearchText] = useState("")

   useEffect(() => {
    fetchData()
   },[])

   async function fetchData(){
    const data = await fetch(ALL_RESTAURENT)
    const json = await data.json()
    setListOfRestaurent(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaurent(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
   }

   console.log(filteredRestaurent)
   

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
                    filteredRestaurent.map((resList) => (
                    <Link
                    className="res-menu-click" 
                    key={resList.info.id}
                    to={"/restaurants/"+resList.info.id}>
                        <Restaurentcard  resData={resList} />
                    </Link> ))
                }
            </div>
        </div>

    )

}

export default Body