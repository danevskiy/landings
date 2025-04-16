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

export default function App() {

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  return (
    <div className="relative">
      <Swiper
        loop={true}
        spaceBetween={40}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        slidesPerView={3}
        slidesPerGroup={3}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination, Navigation]}
        className="categorySwiper"
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
          setSwiperReady(true);
        }}
      >
       
       

        <SwiperSlide>
        <div>
            <img className="w-[100%] h-auto rounded-t-[40px]" src="/images/cat1.jpg" alt="category1"/>
            <div className="px-10 pt-8 pb-10 bg-[#fff] rounded-[40px] inline-flex flex-col justify-start items-start gap-3 -mt-10">
                <div className="text-[#003F70] text-xl font-semibold leading-7">Дієта та харчування</div>
                <div className="text-[#003F70] text-base font-normal leading-relaxed">Ваш організм унікальний, і це важливо враховувати під час складання раціону. Аналіз реакцій на білки, жири, вуглеводи та інші продукти дозволяє створити персоналізований план харчування, що допоможе підтримувати здоров’я та енергію.</div>
            </div>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div>
            <img className="w-[100%] h-auto rounded-t-[40px]" src="/images/cat2.jpg" alt="category2"/>
            <div className="px-10 pt-8 pb-10 bg-[#fff] rounded-[40px] inline-flex flex-col justify-start items-start gap-3 -mt-10">
                <div className="text-[#003F70] text-xl font-semibold leading-7">Вітаміни та мінерали</div>
                <div className="text-[#003F70] text-base font-normal leading-relaxed">Недостатність важливих вітамінів і мінералів може призвести до зниження життєвого тонусу. Ми аналізуємо ризики дефіциту ключових елементів, таких як вітаміни A, D, B12, магній, залізо та кальцій, щоб допомогти вам уникнути потенційних проблем зі здоров’ям.</div>
           </div>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div>
            <img className="w-[100%] h-auto rounded-t-[40px]" src="/images/cat3.jpg" alt="category3"/>
            <div className="px-10 pt-8 pb-10 bg-[#fff] rounded-[40px] inline-flex flex-col justify-start items-start gap-3 -mt-10">
                <div className="text-[#003F70] text-xl font-semibold leading-7">Спорт та фізична активність</div>
                <div className="text-[#003F70] text-base font-normal leading-relaxed">Ваш організм унікальний, і це важливо враховувати під час складання раціону. Аналіз реакцій на білки, жири, вуглеводи та інші продукти дозволяє створити персоналізований план харчування, що допоможе підтримувати здоров’я та енергію.</div>
            </div>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div>
            <img className="w-[100%] h-auto rounded-t-[40px]" src="/images/cat4.jpg" alt="category4"/>
            <div className="px-10 pt-8 pb-10 bg-[#fff] rounded-[40px] inline-flex flex-col justify-start items-start gap-3 -mt-10">
                <div className="text-[#003F70] text-xl font-semibold leading-7">Довголіття та метаболізм</div>
                <div className="text-[#003F70] text-base font-normal leading-relaxed">Генетичні особливості вашого організму впливають на тривалість життя, рівень енергії та обмін речовин. Ми аналізуємо показники мітохондріальної функції, швидкості метаболізму, рівня глюкози та ризиків розвитку діабету. Дослідження також охоплює метаболізм ключових речовин, таких як Омега-3 кислоти, алкоголь і кофеїн.</div>
            </div>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div>
            <img className="w-[100%] h-auto rounded-t-[40px]" src="/images/cat5.jpg" alt="category5"/>
            <div className="px-10 pt-8 pb-10 bg-[#fff] rounded-[40px] inline-flex flex-col justify-start items-start gap-3 -mt-10">
                <div className="text-[#003F70] text-xl font-semibold leading-7">Гормони та сон</div>
                <div className="text-[#003F70] text-base font-normal leading-relaxed">Аналіз рівня адреналіну, дофаміну, кортизолу та інших гормонів показує, як ваш організм реагує на стрес і підтримує емоційний баланс. Дослідження сну, зокрема глибини, тривалості та хронотипу, допоможе покращити якість відпочинку і підвищити рівень енергії.</div>
            </div>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div>
            <img className="w-[100%] h-auto rounded-t-[40px]" src="/images/cat6.jpg" alt="category6"/>
            <div className="px-10 pt-8 pb-10 bg-[#fff] rounded-[40px] inline-flex flex-col justify-start items-start gap-3 -mt-10">
                <div className="text-[#003F70] text-xl font-semibold leading-7">Схильність до алергій</div>
                <div className="text-[#003F70] text-base font-normal leading-relaxed">Алергії можуть впливати на ваше здоров’я та комфорт, і їхні ризики важливо знати заздалегідь. Ми аналізуємо вашу схильність до харчових алергій, таких як пшениця, молоко, яйця, арахіс, а також можливу непереносимість лактози та глютену, і чутливість до алергенів, пов’язаних із кішками та собаками.</div>
            </div>
        </div>
        </SwiperSlide>
       
      </Swiper>

      <button ref={prevRef} className="absolute top-1/2 left-0 z-10 transform -translate-y-[20px] cursor-pointer">
      <img src="/images/left-arrow.svg" alt="left slider arrow" />
      </button>
      <button ref={nextRef} className="absolute top-1/2 right-0 z-10 transform -translate-y-[20px] cursor-pointer">
      <img src="/images/right-arrow.svg" alt="right slider arrow" />
      </button>
      </div>
  );
}
