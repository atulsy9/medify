import "./HeroSection.css";
import Navbar from "./Navbar/Navbar";
import SearchSection from "./SearchSection/SearchSection";

const HeroSection = () => {
  return (
    <div style={{ padding: "0 10rem" }}>
      <Navbar />
      <SearchSection />
    </div>
  );
};

export default HeroSection;
