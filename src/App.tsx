import React, { useEffect } from "react";
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
import { ShoppingCartProvider } from "./pages/ShoppingCartContext";
import MerchEdit from "./pages/MerchEdit";

import { setViews } from "./redux/views";
import Axios from "axios";
import MerchNew from "./pages/MerchNew";
import Petedit from "./pages/Petedit";
import PetNew from "./pages/PetNew";
import AdoptAdmin from "./pages/AdoptAdmin";
import AdoptUser from "./pages/AdoptUser";




 

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(

  <ShoppingCartProvider>
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
          <Route path="/Petedit" element={<Petedit/>}/>
          <Route path="/PetNew" element={<PetNew/>}/>
          <Route path="/MerchDog" element={<MerchDog/>}/>
          <Route path="/MerchCat" element={<MerchCat/>}/>
          <Route path="/MerchOther" element={<MerchOther/>}/>
          <Route path="/MerchEdit"  element={<MerchEdit/>}/>
          <Route path="/MerchNew"  element={<MerchNew/>}/>
          <Route  path="/AdoptAdmin" element={<AdoptAdmin/>}/>
          <Route  path="/AdoptUser" element={<AdoptUser/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
 </ShoppingCartProvider>
);


