import React from 'react'
import './RestaurantDetailsCard1.css'
const ResDeatilsShimmer = () => {
  return (
    <div style={{width:'100%',display:'flex',justifyContent:'center'}}>
      <div className="res-details-card-shimmer">
    <div className="res-rating-cost">
        <div>
         <span className="res-rating"></span>
         <span className="res-cost"></span>
        </div>
    </div>
    <div className="res-cuisines">
      <span></span>
    </div>

    <div className="res-location-time">
      <span className="res-location"></span>
      <span className="res-time"></span>
   </div>
   
  <div className="res-delivery">
    <span></span>
  </div>
</div>
    </div>
   
  )
}

export default ResDeatilsShimmer