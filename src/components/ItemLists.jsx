import {CDN_LINK} from "../utils/links";

const ItemLists = ({items}) => {
    console.log("ItemLists",items)
    
    return(
        <div>
            {items.map(item => (
                <div key={item?.card?.info?.id} className="m-2 p-2 border-gray-200 border-b-2 text-left flex justify-between">
                    
                    <div className="w-9/12">
                        <div className=" py-2">
                            <span className="text-[18px]  font-gilroyB text-gray-800">{item?.card?.info?.name}</span>
                            <span className="text-[16px] font-gilroyB text-gray-800 "> - ₹{item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}</span>
                        </div>
                        <div className="overflow-hidden text-gray-600 text-[15px]  w-9/12">
                            <p>{item?.card?.info?.description}</p>
                        </div>
                    </div>
                    <div className="w-3/12  relative">
                        <img className="rounded-2xl" src={CDN_LINK+item.card.info.imageId} alt="" />
                        <button className="absolute bottom-0 translate-y-[1rem] right-16 bg-white text-green-600 font-gilroyB py-1 px-6 rounded-lg shadow-md hover:bg-gray-300 cursor-pointer focus:outline-none">ADD</button>
                    </div>
                </div>))}
        </div>
    )
}

export default ItemLists