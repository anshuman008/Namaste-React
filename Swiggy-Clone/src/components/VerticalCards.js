import { CDN_URL } from "../utils/constants";
import { starLogo } from "../assests/assets";
const VerticalCards = ({ resDtat }) => {
    // Debugging line to see the data received
    console.log(resDtat);

    return (
        <div className="flex items-center justify-between w-[50vw] rounded-lg m-4 p-2 border-gray-200 border-b-2">

            <div className="px-3 flex flex-col justify-center">
                <h2 className="font-bold">{resDtat.info?.name}</h2>
                <span>₹ {resDtat?.info?.defaultPrice / 100 || resDtat?.info?.price / 100}</span>
                <div className="flex items-center"> 
                    <span className="flex gap-2 items-center justify-center">
                         <img className="h-4" src={starLogo}/>
                        {resDtat?.info.ratings.aggregatedRating.rating }
                        {resDtat?.info.ratings.aggregatedRating.ratingCountV2 &&
                            ` (${resDtat?.info.ratings.aggregatedRating.ratingCountV2})`}
                    </span>
                </div>
                <p className=" text-gray-400">
                        {resDtat?.info?.description}
                    </p>
            </div>

            <div className="flex-none overflow-hidden rounded-xl" style={{ height: '180px', width: '250px' }}>
                <img
                    className="h-full w-full object-cover"
                    alt="res-image"
                    src={CDN_URL + resDtat?.info?.imageId}
                />
            </div>
        </div>
    );
};

export default VerticalCards;
