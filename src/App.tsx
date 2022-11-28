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
import { ShoppingCartProvider } from "./pages/ShoppingCartContext";
import MerchEdit from "./pages/MerchEdit";
import { setViews } from "./redux/views";
import Axios from "axios";
var startDate = new Date();
const beforeunload = (event: { preventDefault: () => void; }) => {
  event.preventDefault();
  const endDate = new Date();
  const totalTime = endDate.getTime() - startDate.getTime();
  console.log(`Time spent this session in secounds ${totalTime/1000}`);
   const dispatch = useAppDispatch();
   const views = useAppSelector((state)=> state.views.views)
   Axios.post("https://monitoringapiteam4.azurewebsites.net/api/Metrics/AddPageTime/"+parseInt(views.toString())+"/"+parseInt(totalTime.toString()));
   
}
window.addEventListener('beforeunload', beforeunload);

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
          <Route path="/MerchDog" element={<MerchDog/>}/>
          <Route path="/MerchCat" element={<MerchCat/>}/>
          <Route path="/MerchOther" element={<MerchOther/>}/>
          <Route path="/MerchEdit"  element={<MerchEdit/>}/>
          </Route>
        </Routes>
      </BrowserRouter> 
    </Provider> 
 </ShoppingCartProvider>
);
