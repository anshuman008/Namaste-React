import { useState } from "react";
import VerticalCards from "./VerticalCards";

const RestaurantCategoreies = ({restaurantData,setShowList,showList,intialOpen}) =>{

    const {title,itemCards} = restaurantData;
    const [openList,setOpenList] = useState(intialOpen);


    const handelClick = () =>{
        setShowList();
    }

    // console.log(itemCards)
return (
    <div className="flex items-center justify-center">

        {/* Header   */}
        <div className="w-[50vw] bg-gray-50 m-4 flex items-center justify-center flex-col rounded-md p-3 shadow-lg">

        <div className="flex items-center justify-between w-[100%] cursor-pointer" onClick={()=>{
            handelClick()
            setOpenList(!openList)
            }}>
        <span className="font-bold text-lg">{title}({itemCards.length}) </span>
        <span>⬇️</span>
        </div>


      
        {showList&&openList&&itemCards?.map((res,index) => (
            <VerticalCards key={index} resDtat = {res.card}/>
        ))}
        </div>
      
        {/* {itemCards?.map((res,index) => (
            <VerticalCards resDtat = {res.card}/>
        ))} */}
    </div>
)
}

export default RestaurantCategoreies;
