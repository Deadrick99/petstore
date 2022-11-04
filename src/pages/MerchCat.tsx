import Axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect,useState } from "react";
import Cat from "./images/Cat.png"
import Merch, { MerchItem } from "./Merch";
 import backGround from "./images/pawprints.png";

function Merchs () 
{
    const [merch,setMerch]= useState<Array<Merch>>([]);
     var isImg = false;
     var imgPath: string | undefined;
     
    useEffect(()=>{
        const fetchPets = async() => {
            
                const response = await Axios.get("http://petstoretest-production.up.railway.app/api/merchandise");
                initPets(response.data)
               
        }
        fetchPets();
    },[]) 
    const initPets = (data: string | any[])=>
    {
       
        let merchArr = new Array<Merch>; 
        for(let i = 0; i<data.length;i++)
        {
           
            if (data[i].IMAGEFILE !== null){
                isImg = true;
            }
            if( data[i].CATEGORY === "Cat"){
           
            const Merch: Merch={
                id :data[i].ITEMID,
                description :data[i].DESCRIPTION,
                category :data[i].CATEGORY, 
                quantity : data[i].QUANTITY,
                price :data[i].LISTPRICE,
                cartAmount: 0,
                imgURL: Cat
            }
            
        
         
            merchArr.push(Merch);
        }
    }
        setMerch(merchArr);
        
    }

   
    return(
        <div style={{backgroundImage:`url(${backGround})`}}>
            
           <Row  className="mx-auto">
            {merch.map(item =>(
            <Col sm={4} lg={3} className = "m-3 mx-auto p-3" key={item.id} >
             <MerchItem {...item}></MerchItem>
            </Col>
            
             ))}
            </Row> 
            
        </div>
    )
}

export default Merchs;