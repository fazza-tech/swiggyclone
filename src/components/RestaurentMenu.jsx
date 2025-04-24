import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"

 const RestaurentMenu = () => {
    const [resInfo, setResInfo] = useState(null)

    useEffect(() => {
        fetchMenu()
    },[])

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.2587531&lng=75.78041&restaurantId=729144&catalog_qa=undefined&submitAction=ENTER")

        const json = await data.json()
        console.log(json)
        setResInfo(json.data)
    }

    const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info || []

  return resInfo===0?(<Shimmer/>)  : (
    <div className="menu">
        <h1>{name}</h1>
        <h3>{cuisines?.join(",")}</h3>
        <h3>{costForTwoMessage}</h3>
    </div>
  )
}

export default RestaurentMenu