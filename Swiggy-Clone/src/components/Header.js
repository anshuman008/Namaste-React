import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import {useSelector} from "react-redux"
 const HeaderComp = () => {

    const [text,settext] = useState('Login');
    const changeAuth = ()=>{
        if(text === 'Login') settext('Logout');
        else settext('Login');
    }


    const onlinestatus = useOnlineStatus();
    
    const data= useContext(UserContext);
    const cartItems = useSelector((store) => store.cart.items);
    // console.log(cartItems);

    return(
        <div className="flex items-center justify-between pl-2 pr-4 shadow-lg mb-2 sticky top-0 z-50 bg-white">

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
                
                <li className="cursor-pointer hover:text-slate-500 font-bold text-xl" >
                      <Link to={'/res/cart'} >
                  Cart ({cartItems.length} items)
                    </Link>
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