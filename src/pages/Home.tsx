import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <div className="banner fw-bold">
        <h1>Amazonian</h1>
        <h5>The best for less...</h5>
        <Link to="/store">
          <Button className="btn btn-md">Shop now!</Button>
        </Link>
      </div>
    </>
  );
};

export default Home;
