import { MENU_LINK } from "../utils/links"
import { useEffect, useState } from "react"


const useRestaurentMenu = (resId) => {

    const [resInfo,setResInfo] = useState(null)

    useEffect(() => {
        fetchMenu()
    },[])

    const fetchMenu = async () => {
        const data = await fetch(MENU_LINK+resId)
        const json = await data.json()
        setResInfo(json.data)
        console.log(json)
    }
    

    return resInfo
}

export default useRestaurentMenu