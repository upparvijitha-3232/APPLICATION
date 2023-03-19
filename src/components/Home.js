import { Carousel } from 'bootstrap'
import React from 'react';
import x from './img/image1.jpg';
import y from './img/image16.jpg';
import t from './img/image3.jpg';
import a from './img/image4.jpg';



function Home() {
  return (
    <div><marquee width="60%" direction="left" height="30px">
    <h3>This is a sample scrolling text that has scrolls texts to left.</h3>
    </marquee>
 

    <div id="carouselExampleControlsNoTouching" className="carousel slide align-item-center" data-bs-touch="false">
  <div className="carousel-inner carousel-indicator-height:1%">
    <div className="carousel-item active">
      <img src={y}
       className="d-block " style={{width:"100%",height:"500px"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={t} className="d-block "style={{width:"100%",height:"500px"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={a} className="d-block" style={{width:"100%",height:"500px"}} alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<img alt="..."className="w-full rounded-full align-middle border-none shadow-lg"
              src={x}  style={{width:"100%",height:"500px"}}
            />
<div>
  
  
</div>



















    
    </div>
  )
}

export default Home