import Hero from "./Hero";
import Aboutus from "./Aboutus";
import Whyus from "./Whyus";
import Featuredest from "./Featuredest";
import Testimonials from "./Testimonials";
import Newsletter from "./Newsletter";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <Hero />
      <Whyus />
      <Aboutus />
      <Featuredest />
      <Testimonials />
      <Newsletter />
    </div>
  );
}

export default Home;
