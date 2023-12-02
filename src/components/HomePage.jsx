import React from 'react'
import Carousel from './Carousel'
import HomePageCard from './HomePageCard'
import CarouselCategory from './CarouselCategory'
import { CarouselProduct } from './'

const HomePage = () => {
  return (
    <div className='bg-amazonclone-background'>
      <div className='min-w-[1000px] max-w-[1525px] m-auto bg-background'>testing
        <Carousel />
        <div className='grid grid-cols-3 xl:grid-cols-4 -mt-80'>
          <HomePageCard title={"We have a surprise for you"} img={"../images/home_grid_1.jpg"} link={"see terms and conditions"} />
          <HomePageCard title={"watch the rings of power"} img={"../images/home_grid_2.jpg"} link={"Start streaming now"} />
          <HomePageCard title={"Unlimited Streaming"} img={"../images/home_grid_3.jpg"} link={"Find Out More"} />
          <HomePageCard title={"More titles to watch"} img={"../images/home_grid_4.jpg"} link={"Browse Kindle Unlimited"} />
          <HomePageCard title={"Shop pet supplies"} img={"../images/home_grid_5.jpg"} link={"See more"} />
          <HomePageCard title={"Spring Sale"} img={"../images/home_grid_6.jpg"} link={"See the deals"} />
          <HomePageCard title={"Echo Buds"} img={"../images/home_grid_7.jpg"} link={"See more"} />
          <HomePageCard title={"Family Plan : 3 months free"} img={"../images/home_grid_8.jpg"} link={"Learn more"} />
          <div className='m-3 pt-8'>
            <img className='xl:hidden' src={"../images/Banner_image_2.jpg"} alt="" />
          </div>
        </div>
        <CarouselProduct />
        <CarouselCategory />
      </div>
    </div>
  )
}

export default HomePage