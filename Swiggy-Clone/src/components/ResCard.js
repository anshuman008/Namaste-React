import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

 const ResCard=(props)=>{
    // console.log(props.variety)
    const {resData} = props;
    const {cloudinaryImageId,name,cuisines,avgRating,areaName,id} = resData;
    return(
        <Link className="divlink" to={`/res/${id}`}>
        <div className="res-card">
           <div className="image-box">
           <img className="res-image" alt="res-image" 
           src={CDN_URL+cloudinaryImageId}/>
           </div>
          <h3>{name}</h3>
          <h4>{cuisines.join(", ")}</h4>
          <h4>{avgRating} stars</h4>
          <h4>{resData.sla.deliveryTime} minutes</h4>
          <h5>location: {areaName}</h5>
        </div>
        </Link>
    )
}

export default ResCard;
