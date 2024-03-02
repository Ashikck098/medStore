import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard"
import SingleView from "./pages/SingleView"
import Order from "./pages/Order"
import Cart from "./pages/Cart"
import Address from "./pages/Address"
import Payment from "./pages/Payment"
import PaymentSuccess from "./pages/PaymentSuccess/PaymentSuccess"
import SearchPage from "./components/SearchPage/SearchPage";
import LensPage from "./pages/LensPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/singlePage/:id" element={<SingleView/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/orders" element={<Order/>} />
        <Route path="/address" element={<Address/>} />
        <Route path="/payment/:id" element={<Payment/>} />
        <Route path="/paymentSuccess" element={<PaymentSuccess/>} />
        <Route path="/search/:data" element={<SearchPage />} />
        <Route path="/medlens" element={<LensPage />} />
      </Routes>
    </div>
  );
}

export default App;
