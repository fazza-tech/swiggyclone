
import ItemLists from "./ItemLists"

const RestaurentCategory = ({data, showItems, setShowIndex}) => {

    console.log("this is show items::",showItems)

    const handleClick = () => {
        setShowIndex()
    }
    

    return(
        <div className="w-6/12 bg-gray-50 mx-auto my-4 shadow-lg p-4">
            <div className="  flex justify-between" onClick={handleClick}>
                
                <span className="font-bold text-lg cursor-pointer">{data.title} ({data.itemCards.length})</span>
                <span className="cursor-pointer">🔽</span>
                
            </div>
            <div>
            {showItems && <ItemLists items={data?.itemCards}/>}
            </div>
           
        </div>
    )
}

export default RestaurentCategory