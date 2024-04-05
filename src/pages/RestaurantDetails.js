import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "../components/Shimmer";
import "./RestaurantDetails.css"; // Assuming you have a CSS file for styling
import RestaurantDetailsCard1 from "../components/RestaurantDetailsCard1";
import ResDeatilsShimmer from "../components/ResDeatilsShimmer";
import CardSlider from "../components/CardSlider";
import MenuList from "../components/MenuList";
import { CDN_URL } from "../utils/constants";

const RestaurantDetails = () => {
  const [resInfo, setResInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getRestaurantData();
  }, []);

  const getRestaurantData = async () => {
    try {
      const result = await axios.get(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.61450&lng=77.30630&restaurantId=${id}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`
      );
      setResInfo(result?.data?.data);
    } catch (err) {
      console.error(err);
    }
  };

  if (resInfo === null) return <ResDeatilsShimmer />;

  const { title, carousel } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  console.log(itemCards[0]?.card?.info);

  const { name } =
    resInfo === undefined ? "" : resInfo?.cards[2]?.card?.card?.info;
  return (
    <div className="restaurant-details-container">
      <h1 className="restaurant-name">Welcome to {name}</h1>
      <RestaurantDetailsCard1 resInfo={resInfo?.cards[2]?.card?.card?.info} />
      <div style={{ height: 30 }}></div>
      {title !== "Recommended" && (
        <CardSlider title={title} carousel={carousel} />
      )}

      <div style={{ marginTop: "30px" }}>
        <h2>Menu Items</h2>

        <div>
          {itemCards?.map((res, index) => (
            <div key={index} className="MenuDivCard">
              <div className="destails-div">
                <h2>{res?.card?.info?.name}</h2>

                <span>$ {res?.card?.info?.defaultPrice / 10}</span>

                <div>
                  <span>
                    {res?.card?.info.ratings.aggregatedRating.rating} (
                    {res?.card?.info.ratings.aggregatedRating.ratingCountV2})
                  </span>
                </div>

                <div>
                  <h5>{res?.card?.info.description}</h5>
                </div>
              </div>

              <div>
              <img className="resTaurantimage-image" alt="res-image" 
                   src={CDN_URL+res?.card?.info?.imageId}/>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;
