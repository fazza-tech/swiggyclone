import { useState } from "react"
import { Link } from "react-router-dom"

const Heading = () => {

    const [loginBtn, setLoginBtn] = useState(false)
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="\src\assets\swiggy-logo.svg" alt="" />
                <h4 className="location">Other Kozhikodu, Kerala, India</h4>
            </div>
            <div className="nav-items">
                <ul>
                    <li> <Link to='/'>Home</Link></li>
                    <li> <Link to='/about'>About</Link> </li>
                    <li> <Link to='/contact'>Contact</Link></li>
                    <li> <Link to='/cart'>Cart</Link></li>
                    <button className="login-btn" onClick={() => {
                        setLoginBtn(!loginBtn)
                    }}>{loginBtn?"login":"logout"}</button>
                </ul>
            </div>
        </div>
    )
}

export default Heading 