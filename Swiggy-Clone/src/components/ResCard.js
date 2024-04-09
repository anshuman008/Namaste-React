import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

 const ResCard=(props)=>{
    // console.log(props.variety)
    const {resData} = props;
    const {cloudinaryImageId,name,cuisines,avgRating,areaName,id} = resData;
    return(
        <Link className="" to={`/res/${id}`}>
        <div className=" m-4 w-[250px]  bg-slate-400 rounded-xl hover:bg-slate-300">

           <div className="">
           <img className="rounded-xl h-[210px] w-screen" alt="res-image" 
           src={CDN_URL+cloudinaryImageId}/>
           </div>

          <div className="p-3">
          <h3  className="font-bold py-2 text-lg">{name}</h3>
          <h4>{cuisines.join(", ")}</h4>
          <h4>{avgRating} stars</h4>
          <h4>{resData.sla.deliveryTime} minutes</h4>
          <h5>location: {areaName}</h5>
          </div>

        </div>
        </Link>
    )
}

export default ResCard;
