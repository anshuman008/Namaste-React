import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Shimmer from '../components/Shimmer';
import './RestaurantDetails.css'; // Assuming you have a CSS file for styling
import RestaurantDetailsCard1 from '../components/RestaurantDetailsCard1';
import ResDeatilsShimmer from '../components/ResDeatilsShimmer';

const RestaurantDetails = () => {
  const [resInfo, setResInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getRestaurantData();
  }, []);

  const getRestaurantData = async () => {
    try {
      const result = await axios.get(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.61450&lng=77.30630&restaurantId=${id}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`);
      setResInfo(result?.data?.data.cards[2].card.card.info);
    } catch (err) {
      console.error(err);
    }
  };

  if (!resInfo) {
    return <ResDeatilsShimmer />;
  }

  const { name, areaName, costForTwoMessage, avgRatingString, cuisines } = resInfo;

  return (
    <div className="restaurant-details-container">
      <h1 className="restaurant-name">Welcome to {name}</h1>
       <RestaurantDetailsCard1 resInfo = {resInfo}/>
    </div>
  );
};

export default RestaurantDetails;
