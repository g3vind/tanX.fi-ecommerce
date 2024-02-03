import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import RegisterPage from "./pages/RegisterPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
