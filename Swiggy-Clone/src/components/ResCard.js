import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import { starLogo } from "../assests/assets";

 const ResCard=(props)=>{
    // console.log(props.variety)
    const {resData} = props;
    const {cloudinaryImageId,name,cuisines,avgRating,areaName,id} = resData;
    
    const {slaString} = resData.sla;

    console.log(resData);
      // Function to format the cuisines array
      const formatCuisines = (cuisines) => {
        if (cuisines.length > 3) {
            return cuisines.slice(0, 3).join(", ") + "...";
        } else {
            return cuisines.join(", ");
        }
    };
    return(
        <Link className="" to={`/res/${id}`}>
        <div className=" m-4 w-[250px] h-[400x]">

           <div className="overflow-hidden rounded-xl h-[220px] w-[250px]">
           <img className="rounded-xl" alt="res-image" 
           src={CDN_URL+cloudinaryImageId}/>
           </div>

          <div className="p-3">
          <h3  className="font-bold py-1 text-lg">{name}</h3>
          <h4 className="font-bold">{formatCuisines(cuisines)}</h4>
          <div className="flex items-center gap-2">
             <img className="h-5" src={starLogo}/>
             <h4 className="font-bold">{avgRating}</h4> 
             <h4>•</h4>
             <h4 className="font-bold">{slaString}</h4>
          </div>
          <h5>location: {areaName}</h5>
          </div>
        </div>
        </Link>
    )
}


// Creating an High Order Component

export const withOpenLable = (ResCard) =>{
    
    return  (props) =>{
       return (
     <div className="hover:scale-90 transition-all ease-in-out duration-500">
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Open 🟢</label>
        <ResCard {...props}/>
     </div>
       )
    }
}

export default ResCard;
