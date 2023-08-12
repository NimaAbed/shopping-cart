import React, { useEffect } from "react";
import Layout from "./components/layout/Layout";
import HomePage from "./components/HomePage";
import { Navigate, Route, Routes } from "react-router-dom";
import DetailsPage from "./components/DetailsPage";
import CheckoutPage from "./components/CheckoutPage";




function App() {

  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/products" element={<HomePage />} />
          <Route path="/products/:id" element={<DetailsPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/" element={<Navigate to="/products" />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
