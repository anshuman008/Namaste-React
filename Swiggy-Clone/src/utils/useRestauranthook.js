import { useEffect, useState } from "react";
import axios from 'axios';
import { MENU_API } from "./constants";


const useRestaurant = (resId,getData)=>{

    const [resInfo, setResInfo] = useState();

    useEffect(() => {
        if(getData === 'menu') getRestaurantData();
        
      }, []);
    


    const getRestaurantData = async () => {
        try {
          const result = await axios.get(MENU_API+resId);
          setResInfo(result?.data?.data);
        } catch (err) {
          console.error(err);
        }
      };


    return resInfo;
}

export default useRestaurant;