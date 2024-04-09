import { CDN_URL } from "../utils/constants";
import { starLogo } from "../assests/assets";
const VerticalCards = ({ resDtat }) => {
    // Debugging line to see the data received

    return (
        <div className="flex items-center justify-between w-[50vw] rounded-lg m-4 p-2 border-gray-200 border-b-2">

            <div className="px-3 flex flex-col justify-center w-9/12">
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

            <div className="w-3/12 relative">

                <div className="absolute top-0 right-0">
                    <button className="p-2 bg-white shadow-lg m-auto rounded-md font-bold text-green-500">Add+</button>
                </div>
                <img
                    className="w-full h-auto"
                    alt="res-image"
                    src={CDN_URL + resDtat?.info?.imageId}
                />
            </div>
        </div>
    );
};

export default VerticalCards;
