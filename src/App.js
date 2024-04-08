import "./App.css";
import CouponCode from "./component/CouponCode/CouponCode";
import SpecialisationCard from "./component/SpecialisationCard/SpecialisationCard";
import Header from "./component/Header/Header";
import SpecialisationDisplay from "./component/SpecialisationDisplay/SpecialisationDisplay";
import GoalSection from "./component/GoalSection/GoalSection";
function App() {
  return (
    <>
      <Header />
      <CouponCode />
      <SpecialisationCard />
      <SpecialisationDisplay />
      <GoalSection />
    </>
  );
}

export default App;
