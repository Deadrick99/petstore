import image from "./images/pets2.png";
import {useEffect, useState} from "react";
const Home = () => {
  const [visited, useVistited] = useState(false);
  useEffect(()=>{
  console.log("increment vistor");
},[visited])
  return (
    <body>
      <div className="Home">  
      
      </div>
    </body>
    
);
}

export default Home;
