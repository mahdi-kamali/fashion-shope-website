import { Icon } from '@iconify/react'
import React from 'react'
import { Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


const MainPage = () => {
    return (
        <div className='main-page'>
            <section className='poster'>
                <img className='first' src={require("../../../images/main-page/poster/1.webp")} alt="" />
                <img className='second' src={require("../../../images/main-page/poster/2.jpeg")} alt="" />
                <img className='third' src={require("../../../images/main-page/poster/3.webp")} alt="" />
            </section>


            <section className="new-products">
                <h1>
                    <Icon className='icon' icon="foundation:burst-new" />
                    محصولات جدید
                </h1>

                <Swiper
                    modules={[Navigation, Pagination, Scrollbar]}
                    spaceBetween={20}
                    slidesPerView={5}
                    navigation
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide >
                        <div className="card">
                            <div className="card-header">
                                <img className='card-image' src={require("../../../images/main-page/products/1.jpeg")} alt="" />
                                <div className="card-buttons">
                                    <button className="buy">
                                        <Icon icon="icon-park-outline:shopping-cart" />
                                    </button>
                                    <button className="favoriotes">
                                        <Icon icon="bx:heart" />
                                    </button>
                                    <button className="share">
                                        <Icon icon="clarity:share-line" />
                                    </button>
                                </div>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title">
                                    شامپو تقویت کننده هفت گیاه مناسب انواع مو شون 300 میل
                                </h1>
                                <div className="card-price">
                                    ۵۳/۱۰۰تومان
                                </div>

                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide >
                        <div className="card">
                            <div className="card-header">
                                <img className='card-image' src={require("../../../images/main-page/products/1.jpeg")} alt="" />
                                <div className="card-buttons">
                                    <button className="buy">
                                        <Icon icon="icon-park-outline:shopping-cart" />
                                    </button>
                                    <button className="favoriotes">
                                        <Icon icon="bx:heart" />
                                    </button>
                                    <button className="share">
                                        <Icon icon="clarity:share-line" />
                                    </button>
                                </div>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title">
                                    شامپو تقویت کننده هفت گیاه مناسب انواع مو شون 300 میل
                                </h1>
                                <div className="card-price">
                                    ۵۳/۱۰۰تومان
                                </div>

                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide >
                        <div className="card">
                            <div className="card-header">
                                <img className='card-image' src={require("../../../images/main-page/products/1.jpeg")} alt="" />
                                <div className="card-buttons">
                                    <button className="buy">
                                        <Icon icon="icon-park-outline:shopping-cart" />
                                    </button>
                                    <button className="favoriotes">
                                        <Icon icon="bx:heart" />
                                    </button>
                                    <button className="share">
                                        <Icon icon="clarity:share-line" />
                                    </button>
                                </div>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title">
                                    شامپو تقویت کننده هفت گیاه مناسب انواع مو شون 300 میل
                                </h1>
                                <div className="card-price">
                                    ۵۳/۱۰۰تومان
                                </div>

                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide >
                        <div className="card">
                            <div className="card-header">
                                <img className='card-image' src={require("../../../images/main-page/products/1.jpeg")} alt="" />
                                <div className="card-buttons">
                                    <button className="buy">
                                        <Icon icon="icon-park-outline:shopping-cart" />
                                    </button>
                                    <button className="favoriotes">
                                        <Icon icon="bx:heart" />
                                    </button>
                                    <button className="share">
                                        <Icon icon="clarity:share-line" />
                                    </button>
                                </div>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title">
                                    شامپو تقویت کننده هفت گیاه مناسب انواع مو شون 300 میل
                                </h1>
                                <div className="card-price">
                                    ۵۳/۱۰۰تومان
                                </div>

                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide >
                        <div className="card">
                            <div className="card-header">
                                <img className='card-image' src={require("../../../images/main-page/products/1.jpeg")} alt="" />
                                <div className="card-buttons">
                                    <button className="buy">
                                        <Icon icon="icon-park-outline:shopping-cart" />
                                    </button>
                                    <button className="favoriotes">
                                        <Icon icon="bx:heart" />
                                    </button>
                                    <button className="share">
                                        <Icon icon="clarity:share-line" />
                                    </button>
                                </div>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title">
                                    شامپو تقویت کننده هفت گیاه مناسب انواع مو شون 300 میل
                                </h1>
                                <div className="card-price">
                                    ۵۳/۱۰۰تومان
                                </div>

                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide >
                        <div className="card">
                            <div className="card-header">
                                <img className='card-image' src={require("../../../images/main-page/products/1.jpeg")} alt="" />
                                <div className="card-buttons">
                                    <button className="buy">
                                        <Icon icon="icon-park-outline:shopping-cart" />
                                    </button>
                                    <button className="favoriotes">
                                        <Icon icon="bx:heart" />
                                    </button>
                                    <button className="share">
                                        <Icon icon="clarity:share-line" />
                                    </button>
                                </div>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title">
                                    شامپو تقویت کننده هفت گیاه مناسب انواع مو شون 300 میل
                                </h1>
                                <div className="card-price">
                                    ۵۳/۱۰۰تومان
                                </div>

                            </div>
                        </div>

                    </SwiperSlide>

                </Swiper>
            </section>

            <section className="new-products">
                <h1>
                    <Icon className='icon' icon="foundation:burst-new" />
                    محبوب ترین ها
                </h1>

                <Swiper
                    modules={[Navigation, Pagination, Scrollbar]}
                    spaceBetween={20}
                    slidesPerView={5}
                    navigation
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide >
                        <div className="card">
                            <div className="card-header">
                                <img className='card-image' src={require("../../../images/main-page/products/1.jpeg")} alt="" />
                                <div className="card-buttons">
                                    <button className="buy">
                                        <Icon icon="icon-park-outline:shopping-cart" />
                                    </button>
                                    <button className="favoriotes">
                                        <Icon icon="bx:heart" />
                                    </button>
                                    <button className="share">
                                        <Icon icon="clarity:share-line" />
                                    </button>
                                </div>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title">
                                    شامپو تقویت کننده هفت گیاه مناسب انواع مو شون 300 میل
                                </h1>
                                <div className="card-price">
                                    ۵۳/۱۰۰تومان
                                </div>

                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide >
                        <div className="card">
                            <div className="card-header">
                                <img className='card-image' src={require("../../../images/main-page/products/1.jpeg")} alt="" />
                                <div className="card-buttons">
                                    <button className="buy">
                                        <Icon icon="icon-park-outline:shopping-cart" />
                                    </button>
                                    <button className="favoriotes">
                                        <Icon icon="bx:heart" />
                                    </button>
                                    <button className="share">
                                        <Icon icon="clarity:share-line" />
                                    </button>
                                </div>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title">
                                    شامپو تقویت کننده هفت گیاه مناسب انواع مو شون 300 میل
                                </h1>
                                <div className="card-price">
                                    ۵۳/۱۰۰تومان
                                </div>

                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide >
                        <div className="card">
                            <div className="card-header">
                                <img className='card-image' src={require("../../../images/main-page/products/1.jpeg")} alt="" />
                                <div className="card-buttons">
                                    <button className="buy">
                                        <Icon icon="icon-park-outline:shopping-cart" />
                                    </button>
                                    <button className="favoriotes">
                                        <Icon icon="bx:heart" />
                                    </button>
                                    <button className="share">
                                        <Icon icon="clarity:share-line" />
                                    </button>
                                </div>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title">
                                    شامپو تقویت کننده هفت گیاه مناسب انواع مو شون 300 میل
                                </h1>
                                <div className="card-price">
                                    ۵۳/۱۰۰تومان
                                </div>

                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide >
                        <div className="card">
                            <div className="card-header">
                                <img className='card-image' src={require("../../../images/main-page/products/1.jpeg")} alt="" />
                                <div className="card-buttons">
                                    <button className="buy">
                                        <Icon icon="icon-park-outline:shopping-cart" />
                                    </button>
                                    <button className="favoriotes">
                                        <Icon icon="bx:heart" />
                                    </button>
                                    <button className="share">
                                        <Icon icon="clarity:share-line" />
                                    </button>
                                </div>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title">
                                    شامپو تقویت کننده هفت گیاه مناسب انواع مو شون 300 میل
                                </h1>
                                <div className="card-price">
                                    ۵۳/۱۰۰تومان
                                </div>

                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide >
                        <div className="card">
                            <div className="card-header">
                                <img className='card-image' src={require("../../../images/main-page/products/1.jpeg")} alt="" />
                                <div className="card-buttons">
                                    <button className="buy">
                                        <Icon icon="icon-park-outline:shopping-cart" />
                                    </button>
                                    <button className="favoriotes">
                                        <Icon icon="bx:heart" />
                                    </button>
                                    <button className="share">
                                        <Icon icon="clarity:share-line" />
                                    </button>
                                </div>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title">
                                    شامپو تقویت کننده هفت گیاه مناسب انواع مو شون 300 میل
                                </h1>
                                <div className="card-price">
                                    ۵۳/۱۰۰تومان
                                </div>

                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide >
                        <div className="card">
                            <div className="card-header">
                                <img className='card-image' src={require("../../../images/main-page/products/1.jpeg")} alt="" />
                                <div className="card-buttons">
                                    <button className="buy">
                                        <Icon icon="icon-park-outline:shopping-cart" />
                                    </button>
                                    <button className="favoriotes">
                                        <Icon icon="bx:heart" />
                                    </button>
                                    <button className="share">
                                        <Icon icon="clarity:share-line" />
                                    </button>
                                </div>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title">
                                    شامپو تقویت کننده هفت گیاه مناسب انواع مو شون 300 میل
                                </h1>
                                <div className="card-price">
                                    ۵۳/۱۰۰تومان
                                </div>

                            </div>
                        </div>

                    </SwiperSlide>

                </Swiper>
            </section>


            <section className="why-us">
                <div className="item">
                    <img src="https://mootanroo.com/Themes/MtrDigi/Content/assets/images/components/footer/delivery.svg" alt="" />
                    <span>ارسال سریع محصول به سراسر ایران</span>
                </div>
                <div className="item">
                    <img src="https://mootanroo.com/Themes/MtrDigi/Content/assets/images/components/footer/consulting.svg" alt="" />
                    <span>
                        مشاور تخصصی
                        <br />
                        021-78371000
                    </span>
                </div>
                <div className="item">
                    <img src="https://mootanroo.com/Themes/MtrDigi/Content/assets/images/components/footer/orginal.svg" alt="" />
                    <span>تضمین اصالت کالا</span>
                </div>
                <div className="item">
                    <img src="https://mootanroo.com/Themes/MtrDigi/Content/assets/images/components/footer/return.svg" alt="" />
                    <span>فرصت 7 روزه بازشگت کالا</span>
                </div>


            </section>

            <section className="about-us">
                <h1>
                    فروشگاه اینترنتی مو تن رو، خرید لوازم آرایشی و بهداشتی، همراه زیبایی شما
                </h1>

                <p>
                    فروشگاه اینترنتی مو تن رو، مجموعه ی کاملی از بهترین برندهای لوازم آرایشی و بهداشتی در سراسر جهان را فراهم آورده تا نیاز یکایک شما را برای خرید اینترنتی لوازم آرایشی و بهداشتی برآورده نماید. این مجموعه، شامل انواع لوازم آرایشی برای آرایش صورت، چشم، ابرو، لب، بدن، ناخن و به طور کل مجموعه ای مجهز از ابزارهای آرایشی است. جز آن لیستی کامل از ملزومات در زمینه مراقبت از پوست، محصولات مو و همینطور اکسسوری و زیورآلات می شود. شما می تواند خریدهای خود در زمینه آرایشی-بهداشتی را با مناسب ترین قیمت و همینطور با استفاده از آفرهای ویژه از جمله بخش جذاب آفروز در مو تن رو انجام دهید.
                </p>
            </section>

        </div>
    )
}

export default MainPage