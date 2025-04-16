// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export default function App() {

  return (
    <div className="p-5 bg-gradient-to-b from-white to-slate-50 rounded-[32px] outline outline-1 outline-offset-[-1px] outline-[#F1F5F9]">
      <Swiper
        loop={true}
        spaceBetween={10}
        autoHeight={true}
        navigation={false}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
        className="reviewSwiper"
      >
       
        <SwiperSlide>
            <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0">
                    <img className="w-[100%] h-auto" src="/images/rev1.png" alt="review 1"/>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between gap-2">
                    <div className="text-[#003F70] text-base font-semibold leading-tight">Вікторія Весна</div>
                    <div className="flex gap-1 items-center">
                    <span className="shrink-0">
                            <img className="w-5 h-auto" src="/images/star.svg" alt="review-rating-star" />
                    </span> 
                    <span className="justify-start text-[#F7941D] text-base font-semibold leading-none">4.9</span>
                    </div>
                    </div>

                    <p className="text-[#003F70] text-base font-normal leading-relaxed">Велика подяка, за таку можливість зробити генетичний аналіз. Завдяки йому я позбулася сумнівів, страхів та переживань за здоров'я сина. Завдяки консультації з чудовою лікаркою я отримала відповіді на усі свої запитання та рекомендації, що вже втілюю у життя.</p>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0">
                    <img className="w-[100%] h-auto border-r-[100%] overflow-hidden" src="/images/rev2.png" alt="review 2"/>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between gap-2">
                    <div className="text-[#003F70] text-base font-semibold leading-tight">Іванна Абдрахманова</div>
                    <div className="flex gap-1 items-center">
                    <span className="shrink-0">
                            <img className="w-5 h-auto" src="/images/star.svg" alt="review-rating-star" />
                    </span> 
                    <span className="justify-start text-[#F7941D] text-base font-semibold leading-none">4.9</span>
                    </div>
                </div>

                    <p className="text-[#003F70] text-base font-normal leading-relaxed">Звернулася в Humess для здачі ДНК-тесту та отримала професійну консультацію за результатами. Дуже сподобалося що отримала не лише відповіді на свої запитання щодо здоров’я, а навіть більше! Окремо хочу відзначити онлайн-консультацію, де все пояснили доступно та зрозуміло, а також надали конкретні рекомендації для покращення здоров’я. В найближчий час знову звернуся для додаткових аналізів та підбору вітамінів. Тепер я точно знаю що саме потрібно моєму організму і як правильно діяти. Дякую за вашу роботу💜</p>
                </div>
            </div>
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
}
