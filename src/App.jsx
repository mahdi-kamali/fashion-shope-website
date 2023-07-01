import Footer from "./jsx/footer/Footer";
import Header from "./jsx/header/Header";
import MainPage from "./jsx/pages/main-page/MainPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductsPage from "./jsx/pages/products-page/ProductsPage";
import AboutUsPage from "./jsx/pages/about-us/AboutUsPage";
import ShoppingCartPage from "./jsx/pages/shopping-cart-page/ShoppingCartPage";

function App() {
  return (
    <main className="App" dir="rtl" >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/products-page" element={<ProductsPage />} />
          <Route path="/about-us-page" element={<AboutUsPage />} />
          <Route path="/shopping-cart-page" element={<ShoppingCartPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </main>
  );
}

export default App;