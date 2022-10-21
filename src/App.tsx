import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';

import Adopt from "./pages/Adopt";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Page404 from "./pages/Page404";
import SignUp from "./pages/SignUp";

import PetsDog from "./pages/PetsDog";
import PetsCat from "./pages/PetsCat";
import PetsOther from "./pages/PetsOther";
import MerchDog from "./pages/MerchDog";
import MerchCat from "./pages/MerchCat";
import MerchOther from "./pages/MerchOther";

import "./App.css";
import { useAppDispatch, useAppSelector} from "./redux/hooks"
import store from './redux/store';

var startDate = new Date();
const beforeunload = function(){
  const endDate = new Date();
  const totalTime = endDate.getTime() - startDate.getTime();
  console.log(`Time spent this session in secounds ${totalTime/1000}`);
   
   const time = Date.now();
  while ((Date.now() - time) < 2000) {

    }
}
window.addEventListener('beforeunload', beforeunload);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  
  
    <Provider store={ store }>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<Page404 />} />
            <Route  path="/Adopt" element={<Adopt/>}/>
           <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/PetsDog" element={<PetsDog/>}/>
          <Route path="/PetsCat" element={<PetsCat/>}/>
          <Route path="/PetsOther" element={<PetsOther/>}/>
          <Route path="/MerchDog" element={<MerchDog/>}/>
          <Route path="/MerchCat" element={<MerchCat/>}/>
          <Route path="/MerchOther" element={<MerchOther/>}/>
          </Route>
        </Routes>
      </BrowserRouter> 
    </Provider> 
 
);
