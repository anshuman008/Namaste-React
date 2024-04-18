import ResCard , {withOpenLable}from "./ResCard";
import { useCallback, useContext, useEffect, useState } from "react";
import axios from "axios";
import Shimmer from "./Shimmer";
import { SWIGGY_API } from "../utils/constants";
import UserContext from "../utils/userContext";

export const BodyComp = () => {
  // imoting data from live data

  const [allResturantData, setAllResturantData] = useState([]);
  const [data, setData] = useState(allResturantData);
  const [searchText, setSeachText] = useState("");

  const {UserName,setName} = useContext(UserContext);

// console.log(setName)
const RestCardWithOpenLable = withOpenLable(ResCard);

console.log('renderedd');
  const getData = async () => {
    try {

      // This Runs Without Cors Plugin 

      const result = await axios.get(
        "https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.61450&lng=77.30630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",{
          headers: {
          'x-cors-api-key': 'temp_401e3ce91a82fc8b12b796883eab4672'
          }
        }
      );

      // const result = await axios.get(SWIGGY_API);
       
      
      const restraurnData =
        result?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
          // console.log( result?.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          //   ?.restaurants[0])
      setData(restraurnData);
      console.log(result.data.data.cards[1])
      setAllResturantData(restraurnData);
    } catch (e) {
      console.log(e, "error");
    }
  };

  const getMoreData = async() =>{
    try {
      const response = await axios.post('https://www.swiggy.com/dapi/restaurants/list/update', {
        lat: "28.61450",
        lng: "77.30630",
        nextOffset: "COVCELQ4KIDgsqyLnpXBBzCnEzgC",
      });
  
      // Process the response data as needed
      console.log(response.data);
    } catch (error) {
      // Handle any errors here
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    getData();
    // getMoreData();
  }, []);

  function filterData() {
    const newArr = allResturantData?.filter((res) => res.info.avgRating > 4.2);

    setData(newArr);
  }

  return data?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-Conatiner">

      <div className="flex items-center justify-around px-10 py-5">

        <div className="flex gap-5">
          <button className="bg-blue-400 px-3 py-1 rounded-md text-white" onClick={filterData}>
            Top Rated
          </button>
          <button
          className="bg-blue-400 px-3 py-1 rounded-md text-white"
            onClick={() => {
              setData(allResturantData);
            }}
          >
            ALL
          </button>
        </div>

        <div className="flex items-center justify-center gap-4">
          <input className="flex items-center px-4 py-1 rounded-sm border border-solid border-black border-" type="text" placeholder="Search Here" onChange={(e)=>{setSeachText(e.target.value)}} value={searchText} />
          <button className="py-1 px-3 bg-blue-400 rounded-md text-white" onClick={()=>{
             const filterdResurant = allResturantData.filter((res)=>res?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
            //  console.log(allResturantData[0].info.name);
            //  console.log(filterdResurant,'filter data hai yah',searchText);
             setData(filterdResurant);
          }}>Search</button>
        </div>

        <div className="flex items-center justify-center gap-4">
          <input className="flex items-center px-4 py-1 rounded-sm border border-solid border-black border-" type="text" placeholder="Set Name" onChange={(e)=>{setName(e.target.value)}} value={UserName} />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-5 max-w-[1200px] mx-auto">

        {data?.map((restorant,index) => {
          return restorant.isOpen? (<RestCardWithOpenLable key={restorant.info.id} resData={restorant.info} index = {index}/>) :(
            <ResCard key={restorant.info.id} resData={restorant.info} index = {index} />
          );
        })}
      </div>
    </div>
  );
};

export default BodyComp;
