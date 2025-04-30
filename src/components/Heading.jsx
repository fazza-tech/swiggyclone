import { useState } from "react"
import { Link } from "react-router-dom"
import logo from '../assets/swiggy-logo.svg'; 
import useOnlineStatus from "../utils/useOnlineStatus";

const Heading = () => {

    const [loginBtn, setLoginBtn] = useState(false)
    const onlineStatus = useOnlineStatus()
    return(
        <div className="flex justify-between  shadow-2xs">
            <div className="mx-100  my-5">
                <img className="logo" src={logo} alt="" />
                <h4 className="location">Other Kozhikodu, Kerala, India</h4>
            </div>
            <div className="my-5 mx-40">
                <ul className="flex items-center space-x-6 p-5">
                    <li>{onlineStatus? "🟢nline" : "🔴ffline"}</li>
                    <li> <Link to='/'>Home</Link></li>
                    <li> <Link to='/about'>About</Link> </li>
                    <li> <Link to='/contact'>Contact</Link></li>
                    <li> <Link to='/cart'>Cart</Link></li>
                    <li> <Link to='/grocery'>Grocery</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Heading 