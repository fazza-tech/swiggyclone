import Restaurentcard ,{VegLabel} from "./Restaurentcard"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { ALL_RESTAURENT } from "../utils/links"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"



const Body = () => {

    const [listOfRestaurents, setListOfRestaurent] = useState([])
    const [filteredRestaurent, setFilteredRestaurent] = useState([])
    const [searchText, setSearchText] = useState("")
    
    const VegOnly = VegLabel(Restaurentcard)


    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        const data = await fetch(ALL_RESTAURENT)
        const json = await data.json()
        setListOfRestaurent(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurent(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    const onlineStatus = useOnlineStatus()
    if (onlineStatus === false) return <h1>Your internet connection is dead</h1>

    if (listOfRestaurents.length === 0) {
        return <Shimmer />
    }

    
    

    return (
        <div className="body">
            <div className="my-5 flex justify-center">
                <input
                    type="text"
                    className=" border border-gray-300 rounded focus:outline-green-200 mx-2"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value)
                    }}
                />
                <button className="bg-green-200 px-4 py-0.5 rounded-2xl cursor-pointer" onClick={() => {

                    const filteredRes = listOfRestaurents.filter(res => {
                        return res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    })
                    setFilteredRestaurent(filteredRes)

                }}>Search</button>
            </div>
            <div className="flex justify-center">
                <button 
                    
                    onClick={() => {
                        const filtearedRes = listOfRestaurents.filter(res => {
                            return res.info.avgRating > 4.4
                        })

                        setFilteredRestaurent(filtearedRes)
                    }

                    }
                    className="bg-amber-300 rounded px-4 cursor-pointer">Top rated restaurants</button>
            </div>
            <div className="flex flex-wrap">
                {
                    filteredRestaurent.map((resList) => (
                        <Link
                            className="res-menu-click"
                            key={resList.info.id}
                            to={"/restaurants/" + resList.info.id}>
                            {resList.info.veg? <VegOnly resData={resList}/> : <Restaurentcard resData={resList} />}
                            
                        </Link>))
                }
            </div>
        </div>

    )

}

export default Body