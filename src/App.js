import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/cartContext";
import { UserLayout } from "./components/UserLayout";
import { Home } from "./pages/Home";
import { Category } from "./pages/Category";
import { Detail } from "./pages/Detail";
import { Cart } from "./pages/Cart";
import "./styles/styles.scss";

function App() {
  console.log(process.env.FIREBASE_API_KEY);
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<UserLayout />}>
              <Route index element={<Home />} />
              <Route path={"/category/:categoryId"} element={<Category />} />
              <Route path={"/product/:productId"} element={<Detail />} />
              <Route path="/cart" element={<Cart />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
