import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Adopt from "./pages/Adopt";

import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Page404 from "./pages/Page404";
import SignUp from "./pages/SignUp";
import Navbar from './pages/Navbar';
import Pets from "./pages/Pets";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Page404 />} />
          <Route  path="/Adopt" element={<Adopt/>}/>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="/Pets" element={<Pets/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
