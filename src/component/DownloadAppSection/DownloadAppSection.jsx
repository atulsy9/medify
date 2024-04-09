import { Box, Button, Typography } from "@mui/material";
import "./DownloadAppSection.css";
import arrow from "../../assests/downloadSec/Arrow.png";
import googlePlay from "../../assests/downloadSec/googlePlay.png";
import appleStore from "../../assests/downloadSec/appleStore.png";
import mobileScreen from "../../assests/downloadSec/mobileScreen.png";
import logoImage from "../../assests/logo.png";
import icon1 from "../../assests/downloadSec/icon.png";
import icon2 from "../../assests/downloadSec/icon(1).png";
import icon3 from "../../assests/downloadSec/icon(2).png";
import icon4 from "../../assests/downloadSec/icon(3).png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MobileScreenPic from "../../assests/downloadSec/mobileScreenPic.png";

const DownloadAppSection = () => {
  const data1 = [
    "About Us",
    "Our Pricing",
    "Our Gallery",
    "Appointment",
    "Privacy Policy",
  ];
  const data2 = [
    "Orthology",
    "Neurology",
    "Dental Care",
    "Opthalmology",
    "Cardiology",
  ];
  return (
    <Box>
      <Box display={"flex"} m={4}>
        <Box width={"50%"} position={"relative"}>
          <img src={mobileScreen} alt="" className="screen1" />
          <img src={mobileScreen} alt="" className="screen2" />
          <img src={MobileScreenPic} alt="" className="screen11" />
          <img src={MobileScreenPic} alt="" className="screen22" />
        </Box>
        <Box width={"50%"} position={"relative"} ml={"100px"}>
          <img
            src={arrow}
            alt=""
            style={{ position: "absolute", top: "75px", left: "-75px" }}
          />
          <Typography
            fontSize={48}
            fontWeight={600}
            color={"text.specialistText"}
          >
            Download the <br />
            <span className="innerSpanDiv">Medify</span> App
          </Typography>
          <Typography
            color="#414146"
            fontWeight={400}
            fontSize={16}
            mt={"2rem"}
          >
            Get the link to download the app
          </Typography>
          <Box display={"flex"} className="numberOuterDiv">
            <div className="mobileNumberDiv">+91</div>
            <input type="number" />
            <Button variant="contained" style={{ marginLeft: "2rem" }}>
              Send SMS
            </Button>
          </Box>
          <Box display={"flex"} mt={4} className="downloadIconDiv">
            <img src={googlePlay} alt="" />
            <img src={appleStore} alt="" />
          </Box>
        </Box>
      </Box>
      <Box className="footerSection">
        <Box className="footerSectionTopDiv">
          <Box className="logosDiv">
            <img src={logoImage} alt="" style={{ width: "fit-content" }} />
            <Box display={"flex"}>
              <img src={icon1} alt="" style={{ marginInline: "5px" }} />
              <img src={icon2} alt="" style={{ marginInline: "5px" }} />
              <img src={icon3} alt="" style={{ marginInline: "5px" }} />
              <img src={icon4} alt="" style={{ marginInline: "5px" }} />
            </Box>
          </Box>
          <Box>
            {data1.map((val) => {
              return (
                <Typography className="footerTextDiv">
                  <ArrowForwardIosIcon
                    style={{
                      verticalAlign: "text-top",
                      width: "10px",
                      height: "15px",
                    }}
                  />
                  {val}
                </Typography>
              );
            })}
          </Box>
          <Box>
            {data2.map((val) => {
              return (
                <Typography className="footerTextDiv">
                  <ArrowForwardIosIcon
                    style={{
                      verticalAlign: "text-top",
                      width: "10px",
                      height: "15px",
                    }}
                  />
                  {val}
                </Typography>
              );
            })}
          </Box>
          <Box>
            {data1.map((val) => {
              return (
                <Typography className="footerTextDiv">
                  <ArrowForwardIosIcon
                    style={{
                      verticalAlign: "text-top",
                      width: "10px",
                      height: "15px",
                    }}
                  />
                  {val}
                </Typography>
              );
            })}
          </Box>
        </Box>
        <Box className="footerSectionBottomDiv">
          <Typography fontSize={"16px"}>
            Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DownloadAppSection;
