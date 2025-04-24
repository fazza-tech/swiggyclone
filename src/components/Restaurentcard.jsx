import {CDN_LINK} from "../utils/links.js"
const Restaurentcard = (props) => {

    const {resData} = props
    const{
        name,
        avgRating,
        cuisines,areaName,
        cloudinaryImageId
        }=resData?.info
    return(
        <div className="res-card">
            <img className="res-logo" src={CDN_LINK+cloudinaryImageId} />

            <h4>{name}</h4>
            <div className="avg-container">
                <img src=".\src\assets\avgRating.svg" alt="" />
                <h4>{avgRating} {resData.info.sla.deliveryTime} mins</h4>
            </div>
            
            <h4>{cuisines.join(", ")}</h4>
            <h4>{areaName}</h4>
            
        </div>
    )
}

export default Restaurentcard