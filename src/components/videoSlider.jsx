// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useState } from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { FreeMode, Pagination, Navigation } from 'swiper/modules';

export default function App({video_list}) {

  const [isOpen, setIsOpen] = useState(false);
  const [videoData, setVideoData] = useState('')
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);



  function toggleModal(){
    setIsOpen(!isOpen);
  }

  function closeVideo(){
    setVideoData('');
    toggleModal();
  }

  function openVideo(data){
    setVideoData(data);
    toggleModal();
  }

  return (
    <div className="relative">
      <Swiper
        loop={true}
        spaceBetween={40}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        slidesPerView={4}
        slidesPerGroup={1}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination, Navigation]}
        className="videoSwiper"
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
          setSwiperReady(true);
        }}
      >

{(video_list.map((video) => {
 return ( 
 <SwiperSlide key={video.id}>
  <div className="bg-stone-100 rounded-[40px] relative pt-[125%]">
      <div className="absolute left-0 top-0 p-3 w-[100%] h-[100%]">
      <img className="w-[100%] h-[100%] object-cover rounded-[40px]" src={video.imageLink} alt="video 1"/>
      </div>
     
      <div onClick={() => openVideo(video.videoData)} className="absolute bottom-11 right-11 w-14 h-14 bg-gradient-to-r from-orange-500 to-orange-500 rounded-[20px] shadow-[0px_0px_0px_0px_rgba(0,0,0,0.06)] flex justify-center items-center cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <g id="play-svgrepo-com 1">
      <path id="Vector" d="M3 12V18.9671C3 21.2763 5.53435 22.736 7.59662 21.6145L10.7996 19.8727M3 8V5.0329C3 2.72368 5.53435 1.26402 7.59661 2.38548L20.4086 9.35258C22.5305 10.5065 22.5305 13.4935 20.4086 14.6474L14.0026 18.131" stroke="white" strokeWidth="2.11765" strokeLinecap="round"/>
      </g>
      </svg>
      </div>
  </div>
  </SwiperSlide>
  )}))}

       
      </Swiper>

      <button ref={prevRef} className="absolute top-1/2 left-0 z-10 transform -translate-y-[20px] cursor-pointer">
      <img src="/images/left-arrow.svg" alt="left slider arrow" />
      </button>
      <button ref={nextRef} className="absolute top-1/2 right-0 z-10 transform -translate-y-[20px] cursor-pointer">
      <img src="/images/right-arrow.svg" alt="right slider arrow" />
      </button>

        <VideoModal onCloseModal={closeVideo} isOpen={isOpen} content={videoData}/>

      </div>
  );
}


function VideoModal({isOpen, content, onCloseModal}){
  
  return (<div className={`fixed inset-0 bg-[#003F7066] bg-opacity-50 flex items-center justify-center z-50 transition-opacity py-10 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
    <div className="bg-white rounded-lg p-8 pt-9 px-8 relative overflow-auto">
      <button className="absolute top-2 right-2 cursor-pointer" onClick={onCloseModal}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="4.22266" y="3" width="24" height="2" rx="1" transform="rotate(45 4.22266 3)" fill="#003F70"/>
          <rect x="2.80664" y="19.9706" width="24" height="2" rx="1" transform="rotate(-45 2.80664 19.9706)" fill="#003F70"/>
          </svg>
      </button>
    <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
    </div>);
}