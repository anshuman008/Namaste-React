import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import axios from "axios";
import Shimmer from "./Shimmer";

export const BodyComp = () => {
  // imoting data from live data

  const [allResturantData, setAllResturantData] = useState([]);
  const [data, setData] = useState(allResturantData);
const [searchText, setSeachText] = useState("");

console.log('renderedd');
  const getData = async () => {
    try {

      // This Runs Without Cors Plugin 

      // const result = await axios.get(
      //   "https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.61450&lng=77.30630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",{
      //     headers: {
      //     'x-cors-api-key': 'temp_401e3ce91a82fc8b12b796883eab4672'
      //     }
      //   }
      // );

      const result = await axios.get(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.61450&lng=77.30630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const restraurnData =
        result?.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
          // console.log( result?.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          //   ?.restaurants[0])
      setData(restraurnData);
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

  return data.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-Conatiner">
      <div className="search-section">
        <div style={{display:'flex', alignItems:'center',justifyContent:'center'}}>
          <button className="top-rated" onClick={filterData}>
            Top Rated
          </button>
          <button
            className="top-rated"
            onClick={() => {
              setData(allResturantData);
            }}
          >
            ALL
          </button>
        </div>

        <div className="searchBox">
          <input className="searchInput" type="text" placeholder="Search Here" onChange={(e)=>{setSeachText(e.target.value)}} value={searchText} />
          <button className="search-btn" onClick={()=>{
             const filterdResurant = allResturantData.filter((res)=>res?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
             console.log(allResturantData[0].info.name);
             console.log(filterdResurant,'filter data hai yah',searchText);
             setData(filterdResurant);
          }}>Search</button>
        </div>
      </div>

      <div className="Card-Container">
        {data?.map((restorant,index) => {
          return <ResCard key={restorant.info.id} resData={restorant.info} index = {index} />;
        })}
      </div>
    </div>
  );
};

export default BodyComp;
