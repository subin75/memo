import React, { useContext } from 'react'
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


function Slide() {
    const {data,setData} = useContext(Mycontext);
    const changeImg = []

    function change(){
        setData(changeImg);
    }
    console.log(data)

  return (
    <>
    <button onClick={change}> 슬라이드 이미지 바꾸기 </button>
    <Swiper
    spaceBetween={50}
    slidesPerView={1}
    onSlideChange={() => console.log('slide change')}
    navigation={true} 
    modules={[navigation]} 
    className="mySwiper">
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper> 
      </>
    //   {
    //     data.map((item,i)=>
    //         <SwiperSlide key={i}>
    //             <img src={item} alt=""/>
    //     </SwiperSlide>
    //     )
    //   }
  )
}

export default Slide