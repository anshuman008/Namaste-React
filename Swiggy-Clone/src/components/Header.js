import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

 const HeaderComp = () => {

    const [text,settext] = useState('Login');
    const changeAuth = ()=>{
        if(text === 'Login') settext('Logout');
        else settext('Login');
    }


    const onlinestatus = useOnlineStatus();
    
    const data= useContext(UserContext);
       

    return(
        <div className="flex items-center justify-between pl-2 pr-4 shadow-lg mb-2">

            <div  >
              <img  className="w-24" src={LOGO_URL}/>
            </div>
           
           <div  >
            <ul className="flex gap-10 items-center">
                <li  className="cursor-pointer">
                    Online: {onlinestatus? "✅": "🔴"}
                </li>
                <li className="cursor-pointer hover:text-slate-500">
                    <Link to={'/'} >
                     Home
                    </Link>
                </li>
                <li className="cursor-pointer hover:text-slate-500">
                  <Link to='about'  >
                  About Us</Link>
                </li>
                <li className="cursor-pointer hover:text-slate-500">
                    <Link to={'/contact'}  >
                    Contact Us
                    </Link>
                </li>
                <li className="cursor-pointer hover:text-slate-500">
                    Cart 
                </li>
                <li>
                {data.UserName}
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