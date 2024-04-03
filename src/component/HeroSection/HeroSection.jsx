import "./HeroSection.css";
import Navbar from "./Navbar/Navbar";
import SearchSection from "./SearchSection/SearchSection";
import SearchBox from "./SearchSection/SearchBox/SearchBox";

const HeroSection = () => {
  return (
    <div style={{ padding: "0 10rem" }}>
      <Navbar />
      <SearchSection />
      <SearchBox />
    </div>
  );
};

export default HeroSection;
