import './Home.css';
import NavBar from './NavBar';
import Categories from './Categories';

const Home = () => {
  return (
    <div className="container-fluid">
      <NavBar />
      <div className="home-content-container">
        <Categories />
      </div>
    </div>
  );
};

export default Home;