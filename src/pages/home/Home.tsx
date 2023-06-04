import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="homeText">
          <h1 className="wel">We are Elanco</h1>
          <span className="welD">
            An enterprise of purpose-driven people, we believe healthy animals
            are key to solving some of the world's most pressing issues.
          </span>
        </div>
        <div className="imgDiv">
          <img src="/assets/logo.png" alt="" className="iagL"/>
        </div>
      </div>
    </>
  );
};

export default Home;
