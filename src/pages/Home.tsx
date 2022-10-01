import image from "./images/pets2.png";


const Home = () => {
  return (
    <div style={{ backgroundImage:`url(${image})`, 
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh'}}>
    </div>
    //<h1>Home Page</h1>
);
}

export default Home;
