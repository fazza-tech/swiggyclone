import Shimmer from "./Shimmer"
import { useParams } from "react-router"
import useRestaurentMenu from "../utils/useRestaurentMenu"

 const RestaurentMenu = () => {
    

    const {resId} =useParams()

    const resInfo = useRestaurentMenu(resId)

    if(resInfo===null){
      return <Shimmer/>
    }

    const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info || []
    
    const possibleItemCards = [
      resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1],
      resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2],
      resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]
    ]    
       
    const firstValidCard = possibleItemCards.find(card => card?.card?.card?.itemCards)
    const itemCards = firstValidCard?.card?.card?.itemCards;

  return (
    <div className="menu">
        <h1 class="text-3xl font-bold text-red-600">{name}</h1>
        <h3 class="text-2xl text-red-500">{cuisines?.join(",")}</h3>
        <h3>{costForTwoMessage}</h3>
        <h2>Menu</h2>
        <ul>
          {itemCards.map(item => 
            <li key={item.card.info.id}>{ item.card.info.name} - ₹{item.card.info.defaultPrice/100 || item.card.info.price/100}</li>
          )}
          
        </ul>
    </div>
  )
}

export default RestaurentMenu