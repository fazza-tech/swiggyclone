import { CDN_LINK } from "../utils/links.js"
import avgRatingSvg from "../assets/avgRating.svg"
const Restaurentcard = (props) => {

    const { resData } = props
    const {
        name,
        avgRating,
        cuisines, areaName,
        cloudinaryImageId
    } = resData?.info


    return (
        <div className=" rounded-lg w-[200px] bg-gray-50 m-4 p-4 hover:bg-gray-200 duration-400 ease-in-out">
            <img className="rounded-lg" src={CDN_LINK + cloudinaryImageId} />

            <h4 className="my-4 font-bold">{name}</h4>
            <div className="flex">
                <img className="mr-1" src={avgRatingSvg} alt="" />
                <h4>{avgRating} <b>&middot;</b>  {resData.info.sla.deliveryTime} mins</h4>
            </div>

            <h4>{cuisines.join(", ")}</h4>
            <h4>{areaName}</h4>

        </div>
    )
}

export const VegLabel = () => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-green-400 text-white px-2 rounded ">Veg</label>
                <Restaurentcard {...props} />
            </div>

        )
    }
}

export default Restaurentcard