import backGround from "./images/pawPrints.png";
const Page404 = () => {
  return (
    <div style={{ height: "100vh", backgroundImage: `url(${backGround})` }}>
      <h1 style={{ color: "black" }}>404: Page not found</h1>
    </div>
  );
};

export default Page404;
