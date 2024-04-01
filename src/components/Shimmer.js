import React from 'react'

const Shimmer = () => {
  return (
    <div className='shimmer-container'>
               <div className="search-section">
          <button style={{background:"white"}}>Top Rated</button>
          <button style={{background:"white",margin:"10px"}} >ALL</button>
         </div>

         <div className='shimmer-Card-Container'>
         <div className='shimmer-box'></div>
        <div className='shimmer-box'></div>
        <div className='shimmer-box'></div>
        <div className='shimmer-box'></div>
        <div className='shimmer-box'></div>
        <div className='shimmer-box'></div>
        <div className='shimmer-box'></div>
        <div className='shimmer-box'></div>
        <div className='shimmer-box'></div>
         </div>
     
    </div>
  )
}

export default Shimmer