import { Icon } from "@iconify/react"
import { json, useLocation, useNavigate } from "react-router-dom"

const DetailPage = () => {

    const location = useLocation()
    const card = location.state
    const navigator = useNavigate()

    function handleBuyclick() {
        let shoppingCart = JSON.parse(localStorage.getItem("shopping-cart"))
        if (shoppingCart) { } else { shoppingCart = [] }
        let newCart = [...shoppingCart, card]
        localStorage.setItem("shopping-cart", JSON.stringify(newCart))
        navigator("/shopping-cart-page")
    }



    


    return (
        <div className="detail-page">

            <div className="right">
                <img src={card.image} alt="" />
            </div>

            <div className="left">
                <h1 className="title">
                    {card.title}
                </h1>
                <div className="category">
                    {card.category}
                </div>
                <div className="description">
                    {card.description}
                </div>
                <div className="price">
                    {card.price}
                </div>
                <button onClick={() => { handleBuyclick() }}>
                    <span><Icon icon="ph:bag-fill" /></span>
                    <span>خرید</span>
                </button>
            </div>
        </div>
    )
}

export default DetailPage