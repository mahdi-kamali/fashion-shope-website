import { Icon } from "@iconify/react"
import { useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
const ShoppingCartPage = () => {

    const [shoppingCart, setShoppingCart] = useState([])


    useEffect(() => {
        setShoppingCart(JSON.parse(localStorage.getItem("shopping-cart")))
    }, [])


    function deleteFromShoppingCart(card) {

        shoppingCart.forEach((item, index) => {
            if (card.id === item.id) {
                shoppingCart.splice(index, index + 1)
            }
        })

        localStorage.setItem("shopping-cart", JSON.stringify([...shoppingCart]))
        setShoppingCart([...shoppingCart])

    }

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
                    {
                        shoppingCart?.map((item, index) => {
                            return (
                                <div className="card" key={index}>
                                    <div className="card-header">
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className="card-body">
                                        <div className="card-title">
                                            {item.title}
                                        </div>
                                        <div className="card-price">
                                            {item.price}
                                        </div>
                                    </div>
                                    <div className="card-buttons">
                                        <button onClick={() => deleteFromShoppingCart(item)}>
                                            <Icon icon="fluent:delete-24-filled" />
                                        </button>
                                        <button>
                                            <Icon icon="icon-park-outline:like" />
                                        </button>
                                    </div>
                                </div>
                            )
                        })

                    }
                </div>

                {
                    shoppingCart.length === 0 ? "سبد خرید خالی است" : ""
                }


            </div>


        </div>
    )
}

export default ShoppingCartPage