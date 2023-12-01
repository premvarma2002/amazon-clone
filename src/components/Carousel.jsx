import {Swiper,SwiperSlide} from "swiper/react";
import { Navigation } from "swiper/modules"
import "swiper/css/navigation";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Carousel = () => {
  return (
    <div className='h-[600px] bg-white'>
        <Swiper
        loop={true}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
            delay:4500
        }}
        className="h-[50%]"
        >
         <SwiperSlide>
            <img src={"../images/carousel_1.jpg" } alt="carousel_1"  />
         </SwiperSlide>
         <SwiperSlide>
            <img src={"../images/carousel_2.jpg" } alt="carousel_2"  />
         </SwiperSlide>
         <SwiperSlide className="bg-black">
          <video controls muted="muted">
            <source src={"../images/carousel_vid.mp4"}type="video/mp4" />
          </video>
         </SwiperSlide>
         <SwiperSlide>
            <img src={"../images/carousel_4.jpg" } alt="carousel_1"  />
         </SwiperSlide>
         <SwiperSlide>
            <img src={"../images/carousel_5.jpg" } alt="carousel_2"  />
         </SwiperSlide>
        </Swiper>
        <div className="h-[50%] bg-gradient-to-b from-current"/>
    </div>
  )
}

export default Carousel