import { Box, Typography, Button } from "@mui/material";
import "./MedicalCenter.css";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HospitalIcon from "../../../assests/hospitalIcon.png";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import adImg from "../../../assests/adImg.png";

const MedicalCenter = ({ medicalData }) => {
  return (
    <Box ml={"10rem"}>
      <Typography color={"text.black"} fontSize={"24px"} fontWeight={500}>
        {medicalData.length} medical centers available in Alaska
      </Typography>
      <Typography color={"text.grey"} fontSize={"16px"} fontWeight={400}>
        <CheckCircleOutlineIcon sx={{ verticalAlign: "top" }} />
        Book appointments with minimum wait-time & verified doctor details
      </Typography>
      <Box display={"flex"}>
        {medicalData.length
          ? medicalData.map((data) => {
              return (
                <Box key={data["Provider ID"]} className="cardDiv">
                  <Box display={"flex"}>
                    <img src={HospitalIcon} alt="" />
                    <Box className="cardMiddleDiv">
                      <Typography
                        color={"text.blue"}
                        fontSize={"20px"}
                        fontWeight={600}
                      >
                        {data["Hospital Name"]}
                      </Typography>
                      <Box>
                        <Typography
                          color={"text.cardText"}
                          fontSize={"14px"}
                          fontWeight={700}
                        >
                          {data.City}, {data.State}
                        </Typography>
                        <Typography
                          color={"text.cardText"}
                          fontSize={"14px"}
                          fontWeight={400}
                        >
                          {data["Hospital Type"]}
                        </Typography>
                        <Box fontSize={"14px"} display={"flex"}>
                          <Typography color={"text.green"} fontWeight={700}>
                            FREE
                          </Typography>
                          <Typography
                            color={"text.cardText"}
                            px={"0.5rem"}
                            sx={{ textDecorationLine: "line-through" }}
                          >
                            ₹500
                          </Typography>
                          <Typography color={"text.cardText"} fontWeight={400}>
                            Consultation fee at clinic
                          </Typography>
                        </Box>
                      </Box>
                      <Box>
                        <Box className="ratingSection">
                          <ThumbUpIcon />
                          <Typography color={"text.primary"}>
                            {data["Hospital overall rating"]}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box className="cardlastDiv">
                    <Typography
                      color={"text.green"}
                      fontSize={"14px"}
                      fontWeight={500}
                      py={"10px"}
                    >
                      Available Today
                    </Typography>
                    <Button variant="contained">Book FREE Center Visit</Button>
                  </Box>
                </Box>
              );
            })
          : null}
        <img
          src={adImg}
          alt=""
          style={{ objectFit: "contain", marginLeft: "2rem" }}
        />
      </Box>
    </Box>
  );
};

export default MedicalCenter;
