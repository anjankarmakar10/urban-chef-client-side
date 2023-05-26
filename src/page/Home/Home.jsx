import useScrollTop from "../../hooks/useScrollTop";
import FAQ from "./FAQ/FAQ";
import Features from "./Features/Features";
import Hero from "./Hero/Hero";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  useScrollTop();
  return (
    <div>
      <Hero />
      <Features />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default Home;
