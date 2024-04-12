import CouponCode from "../../component/CouponCode/CouponCode";
import SpecialisationCard from "../../component/SpecialisationCard/SpecialisationCard";
import Header from "../../component/Header/Header";
import SpecialisationDisplay from "../../component/SpecialisationDisplay/SpecialisationDisplay";
import GoalSection from "../../component/GoalSection/GoalSection";
import BlogSection from "../../component/BlogSection/BlogSection";
import ReachesSection from "../../component/ReachesSection/ReachesSection";
import AskedQuestion from "../../component/AskedQuestion/AskedQuestion";
import DownloadAppSection from "../../component/DownloadAppSection/DownloadAppSection";

const HomePage = () => {
  return (
    <>
      <Header />
      <CouponCode />
      <SpecialisationCard />
      <SpecialisationDisplay />
      <GoalSection />
      <BlogSection />
      <ReachesSection />
      <AskedQuestion />
      <DownloadAppSection />
    </>
  );
};

export default HomePage;
