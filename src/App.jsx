import "./App.css";
import Categories from "./components/Categories";
import Collection from "./components/Collection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Plants from "./components/Plants";
import Subscribe from "./components/Subscribe";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Collection />
      <Categories />
      <Plants />
      <Subscribe />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
