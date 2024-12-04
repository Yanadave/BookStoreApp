import React from 'react'

// React SLICK SLIDER = Liberary hai cards bnane ke liye sliding wali toh waha se package install kia or import kia 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// slick slidr ke responsive wale option pe jane ke baad 
import Slider from "react-slick";

import list from '../../public/list.json'
import Cards from './Cards';
function Freebook() {
    const filterData = list.filter((data) => data.category === "Free");
    console.log(filterData);

    // SLICK SLIDER LIBRARY SE UTHAYA H

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
    <div className='max-w-screen-2xl w-screen container mx-auto md:px-20 px-4'>
        <div>
          <h1 className='font-semibold text-xl pb-2'>Free Offered Courses</h1>
          <p> Unlock new insights and expand your horizons every day! Dive into captivating topics, discover fascinating ideas, and fuel your curiosity. Let's embark on a journey of learning, where every moment holds a new adventure. 📚✨
          </p>
        </div>
   
    <div>
    <Slider {...settings}>
        {filterData.map((item)=>(
          <Cards item={item} key={item.id}/>
        ))}
      </Slider>
    </div>
  </div>
    </>
  )
}

export default Freebook