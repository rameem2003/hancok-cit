import NavComponenet from "./components/navcomponent/NavComponenet";
import Banner from "./components/Banner";
import About from "./components/about/About";
import PopularGames from "./components/PopularGames";
import Stremming from "./components/Stremming";
import Topgames from "./components/topgames/Topgames";
import Assesories from "./components/assesories/Assesories";
import Teams from "./components/Teams/Teams";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Responsive.css";

function App() {
  return (
    <>
      <NavComponenet />
      <Banner />
      <About />
      <PopularGames />
      <Stremming />
      <Topgames />
      <Assesories />
      <Teams />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
