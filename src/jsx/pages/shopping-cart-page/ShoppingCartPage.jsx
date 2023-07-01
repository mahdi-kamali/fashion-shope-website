import { Icon } from "@iconify/react"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
const ShoppingCartPage = () => {
    return (
        <div className="shopping-cart-page">
            <aside className="right">
                <h1>خلاصه ی خرید شما</h1>

                <ul className="info">
                    <li className="no-discount">
                        <Icon icon="grommet-icons:money" />

                        <span>1200</span>
                        <span>هزینه کل</span>
                    </li>
                    <li className="discount">
                        <Icon icon="mdi:discount" />
                        <span>1200</span>
                        <span>تومان تخفیف</span>
                    </li>

                    <li className="total">
                        <Icon icon="grommet-icons:money" />
                        <span>1200</span>
                        <span>هزینه نهایی</span>
                    </li>
                </ul>

                <button>
                    <Icon icon="wpf:next" />
                    <span> ادامه خرید</span>
                </button>

            </aside>
            <div className="left">
                <h1>سبد خرید شما</h1>
                <div className="products">
                    <div className="card">
                        <div className="card-header">
                            <img src={require("../../../images/products/5.jpeg")} alt="" />
                        </div>
                        <div className="card-body">
                            <div className="card-title">
                                ژل فیکساتور ابرو فلورمار
                            </div>
                            <div className="card-price">
                                <span>100.250</span>
                                <span>تومان</span>
                            </div>
                        </div>
                        <div className="card-buttons">
                            <button>
                                <Icon icon="fluent:delete-24-filled" />
                            </button>
                            <button>
                                <Icon icon="icon-park-outline:like" />
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <img src={require("../../../images/products/5.jpeg")} alt="" />
                        </div>
                        <div className="card-body">
                            <div className="card-title">
                                ژل فیکساتور ابرو فلورمار
                            </div>
                            <div className="card-price">
                                <span>100.250</span>
                                <span>تومان</span>
                            </div>
                        </div>
                        <div className="card-buttons">
                            <button>
                                <Icon icon="fluent:delete-24-filled" />
                            </button>
                            <button>
                                <Icon icon="icon-park-outline:like" />
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <img src={require("../../../images/products/5.jpeg")} alt="" />
                        </div>
                        <div className="card-body">
                            <div className="card-title">
                                ژل فیکساتور ابرو فلورمار
                            </div>
                            <div className="card-price">
                                <span>100.250</span>
                                <span>تومان</span>
                            </div>
                        </div>
                        <div className="card-buttons">
                            <button>
                                <Icon icon="fluent:delete-24-filled" />
                            </button>
                            <button>
                                <Icon icon="icon-park-outline:like" />
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <img src={require("../../../images/products/5.jpeg")} alt="" />
                        </div>
                        <div className="card-body">
                            <div className="card-title">
                                ژل فیکساتور ابرو فلورمار
                            </div>
                            <div className="card-price">
                                <span>100.250</span>
                                <span>تومان</span>
                            </div>
                        </div>
                        <div className="card-buttons">
                            <button>
                                <Icon icon="fluent:delete-24-filled" />
                            </button>
                            <button>
                                <Icon icon="icon-park-outline:like" />
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <img src={require("../../../images/products/5.jpeg")} alt="" />
                        </div>
                        <div className="card-body">
                            <div className="card-title">
                                ژل فیکساتور ابرو فلورمار
                            </div>
                            <div className="card-price">
                                <span>100.250</span>
                                <span>تومان</span>
                            </div>
                        </div>
                        <div className="card-buttons">
                            <button>
                                <Icon icon="fluent:delete-24-filled" />
                            </button>
                            <button>
                                <Icon icon="icon-park-outline:like" />
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <img src={require("../../../images/products/5.jpeg")} alt="" />
                        </div>
                        <div className="card-body">
                            <div className="card-title">
                                ژل فیکساتور ابرو فلورمار
                            </div>
                            <div className="card-price">
                                <span>100.250</span>
                                <span>تومان</span>
                            </div>
                        </div>
                        <div className="card-buttons">
                            <button>
                                <Icon icon="fluent:delete-24-filled" />
                            </button>
                            <button>
                                <Icon icon="icon-park-outline:like" />
                            </button>
                        </div>
                    </div>
                </div>

                
            </div>

            

       
        </div>
    )
}

export default ShoppingCartPage