import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./mycomponent/Sidebar";
import About from "./pages/About";
import Comment from "./pages/Comment";
import Analytics from "./pages/Analytics";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/home";
import Authoprovider from "./mycomponent/authoprovider";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Authoprovider />} />
            <Route path="/sidebar" element={<Sidebar/>} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/comment" element={<Comment />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/product" element={<Product />} />
            <Route path="/productlist" element={<ProductList />} />
            <Route path="/dashboard" element={<Dashboard/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
