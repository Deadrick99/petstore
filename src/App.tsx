import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Adopt from "./pages/Adopt";

import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Page404 from "./pages/Page404";
import SignUp from "./pages/SignUp";
import Navbar from './pages/Navbar2';
import PetsDog from "./pages/PetsDog";
import PetsCat from "./pages/PetsCat";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Page404 />} />
          <Route  path="/Adopt" element={<Adopt/>}/>
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/PetsDog" element={<PetsDog/>}/>
        </Route>
      </Routes>
    </BrowserRouter> 
  </React.StrictMode>
);
