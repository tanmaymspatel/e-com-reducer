import { Route, Routes } from "react-router-dom";
import Header from "./components/core/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import ProductsProvider from "./context/product-contect/ProductsProvider";
import CartProvider from "./context/cart-context/CartProvider";

function App() {
  return (
    <ProductsProvider>
      <CartProvider>
        <div className="min-h-screen ">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/Products" element={<Products />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </CartProvider>
    </ProductsProvider>
  );
}

export default App;
