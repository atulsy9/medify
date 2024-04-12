import { Box } from "@mui/material";
import "./DetailPage.css";
import Header from "../../component/Header/Header";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import AskedQuestion from "../../component/AskedQuestion/AskedQuestion";
import DownloadAppSection from "../../component/DownloadAppSection/DownloadAppSection";
import MedicalCenter from "./MedicalCenter/MedicalCenter";
import { useLocation } from "react-router-dom";
import SearchBox from "../../component/HeroSection/SearchSection/SearchBox/SearchBox";

const DetailPage = () => {
  const { state } = useLocation();
  const { states, city, medicalCenterList } = state.data;
  return (
    <div>
      <Header detailPage={true} />
      <Box height={"110px"} className="navbarBottom"></Box>
      <SearchBox
        detailPage={true}
        currentState={states}
        currentCity={city}
        icon={FmdGoodIcon}
      />
      <div style={{ margin: "7rem 0" }}></div>
      <MedicalCenter medicalData={medicalCenterList} />
      <AskedQuestion />
      <DownloadAppSection />
    </div>
  );
};

export default DetailPage;
