import "./App.css";
import CouponCode from "./component/CouponCode/CouponCode";
import SpecialisationCard from "./component/SpecialisationCard/SpecialisationCard";
import Header from "./component/Header/Header";
import SpecialisationDisplay from "./component/SpecialisationDisplay/SpecialisationDisplay";
import GoalSection from "./component/GoalSection/GoalSection";
import BlogSection from "./component/BlogSection/BlogSection";
function App() {
  return (
    <>
      <Header />
      <CouponCode />
      <SpecialisationCard />
      <SpecialisationDisplay />
      <GoalSection />
      <BlogSection />
    </>
  );
}

export default App;
