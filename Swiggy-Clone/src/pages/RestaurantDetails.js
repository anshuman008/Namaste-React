import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./RestaurantDetails.css"; // Assuming you have a CSS file for styling
import RestaurantDetailsCard1 from "../components/RestaurantDetailsCard1";
import ResDeatilsShimmer from "../components/ResDeatilsShimmer";
import CardSlider from "../components/CardSlider";
import useRestaurant from "../utils/useRestauranthook.JS";
import RestaurantCategoreies from "../components/RestaurantCategories";

const RestaurantDetails = () => {
  const { id } = useParams();

 const resInfo = useRestaurant(id,'menu');
 const [showList,setShowList] = useState(0);

  if (resInfo === null || resInfo === undefined) return <ResDeatilsShimmer />;


  const {title, carousel } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;


    // consoling all data values

  //  resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map((mp) => (
  //   console.log(mp.card?.card?.["@type"])
  //  ))

  const itemsFilterCategories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c =>c.card?.card?.["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');

  // console.log(itemsFilterCategories);

  const { name } = resInfo === undefined ? "": resInfo?.cards[2]?.card?.card?.info;
    
  return (
    <div className="flex items-center justify-center flex-col">
      <h1>Welcome to {name}</h1>
      <RestaurantDetailsCard1 resInfo={resInfo?.cards[2]?.card?.card?.info} />
      <div style={{ height: 30 }}></div>
      {title !== "Recommended" && (
        <CardSlider title={title} carousel={carousel} />
      )}

      <div style={{ marginTop: "30px" }}>
        <h2>Menu Items</h2>
        <div>
          {itemsFilterCategories?.map((res, index) => (
           <div key={index}>
                 <RestaurantCategoreies showList={showList===index?true:false} setShowList = {() => {setShowList(index)}} restaurantData = {res.card.card} intialOpen = {index === 0?true:false} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;
