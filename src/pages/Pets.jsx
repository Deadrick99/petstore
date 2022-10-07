import React from "react";
import Axios from "axios"
import { useEffect } from "react";
function Pets () 
{
    useEffect(()=>{
        const fetchPets = async() => {
            try {
                const response = await Axios.get("http://petstoretest-production.up.railway.app/api/animals");
                console.log(response.data);
            } catch (err) {
                console.log("error")
            }
        }
        fetchPets();
    },[])
}
export default Pets;