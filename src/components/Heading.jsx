import { useState } from "react"
import { Link } from "react-router-dom"
import logo from '../assets/swiggy-logo.svg'; 
import useOnlineStatus from "../utils/useOnlineStatus";

const Heading = () => {

    const [loginBtn, setLoginBtn] = useState(false)
    const onlineStatus = useOnlineStatus()
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo} alt="" />
                <h4 className="location">Other Kozhikodu, Kerala, India</h4>
            </div>
            <div className="nav-items">
                <ul>
                    <li>{onlineStatus? "🟢" : "🔴"}</li>
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