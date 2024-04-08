import { useState } from "react";
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

 const HeaderComp = () => {

    const [text,settext] = useState('Login');
    const changeAuth = ()=>{
        if(text === 'Login') settext('Logout');
        else settext('Login');
    }


    const onlinestatus = useOnlineStatus();

    return(
        <div  className="header" style={{color:"white"}}>
           <img  className="logo" src={LOGO_URL}/>
           
           <div  className="nav-items">
            <ul>
                <li className="Link-div">
                    Online: {onlinestatus? "✅": "🔴"}
                </li>
                <li>
                    <Link to={'/'} className="Link-div" >
                     Home
                    </Link>
                </li>
                <li>
                  <Link to='about' className="Link-div" >
                  About Us</Link>
                </li>
                <li>
                    <Link to={'/contact'} className="Link-div" >
                    Contact Us
                    </Link>
                </li>
                <li>
                    Cart
                </li>
                <li>
                    <button style={{height:'35px', width:'100px',border:'0',background:'grey',color:'white', cursor:'pointer',borderRadius:10}} onClick={()=>{changeAuth()}}>{text}</button>
                </li>
            </ul>
           </div>
        </div>
    )
  }

export default HeaderComp;