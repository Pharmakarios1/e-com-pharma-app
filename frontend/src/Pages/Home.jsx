import Jumbotron from "../components/Jumbotron";
import Team from "../components/Team";
import Treatment from "./Treatment";

const Home = () => {
  return (
    <div>
      <Jumbotron />
      <Treatment />
      <Team />
    </div>
  );
};

export default Home;
