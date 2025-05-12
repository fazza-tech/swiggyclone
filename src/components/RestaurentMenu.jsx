import Shimmer from "./Shimmer"
import { useParams } from "react-router"
import useRestaurentMenu from "../utils/useRestaurentMenu"
import RestaurentCategory from "./RestaurentCategory"
import { useState } from "react"

 const RestaurentMenu = () => {

    const [showIndex, setShowIndex] = useState(0)
    console.log("this is showindex::",showIndex)

    

    const {resId} =useParams()

    const resInfo = useRestaurentMenu(resId)

    if(resInfo===null){
      return <Shimmer/>
    }

    const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info || []
    
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    
  return (
    <div className="text-center">
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <p className="">{cuisines?.join(",")} - {costForTwoMessage}</p>
        {categories.map((category , index)=> (
         <RestaurentCategory key={category.card?.card?.title} 
         data={category?.card?.card} 
         showItems={index===showIndex ?true: false} 
         setShowIndex={() => setShowIndex(index === showIndex ? null : index)} />
        ))
        
        }
        
        {/* <h3>{costForTwoMessage}</h3>
        <h2>Menu</h2>
        <ul>
          {itemCards.map(item => 
            <li key={item.card.info.id}>{ item.card.info.name} - ₹{item.card.info.defaultPrice/100 || item.card.info.price/100}</li>
          )}
          
        </ul> */}
    </div>
  )
}

export default RestaurentMenu