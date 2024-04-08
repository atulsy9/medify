import { Box, Typography } from "@mui/material";
import "./GoalSection.css";
import VerifiedIcon from "@mui/icons-material/Verified";
import goalPic1 from "../../assests/Goal/goalPic1.png";
import goalPic2 from "../../assests/Goal/GoalPic2.png";
import PhoneIcon from "@mui/icons-material/Phone";

const GoalSection = () => {
  return (
    <Box display={"flex"} m={"65px"}>
      <Box p={3} className="goalCardimgMainDiv">
        <Box
          display={"flex"}
          flexDirection={"column"}
          position="absolute"
          backgroundColor="white"
          zIndex={2}
          p={2}
          borderRadius={"8px"}
        >
          <Box display={"flex"}>
            <PhoneIcon
              style={{
                backgroundColor: "#2AA7FF",
                borderRadius: "5px",
                padding: "5px",
              }}
            />
            <Typography
              fontSize="14px"
              color={"text.specialistText"}
              pl={"1rem"}
            >
              Free Consultation
            </Typography>
          </Box>
          <Typography fontSize="14px" color="#77829D" pt={1}>
            Consultation with the best
          </Typography>
        </Box>
        <img src={goalPic1} alt="" className="GoalCardimg1" />
        <img src={goalPic2} alt="" className="GoalCardimg2" />
      </Box>
      <Box width={"50%"}>
        <Typography color="text.blue" fontSize={"16px"}>
          HELPING PATIENTS FROM AROUND THE GLOBE!!
        </Typography>
        <Typography color={"text.secondary"} fontSize={"48px"}>
          Patient <span className="span">Caring</span>
        </Typography>
        <Typography color="#77829D" fontSize={"17px"} py={4}>
          Our goal is to deliver quality of care in a courteous, respectful, and
          compassionate manner. We hope you will allow us to care for you and
          strive to be the first and best choice for healthcare.
        </Typography>
        <Typography color={"text.specialistText"} pb={3}>
          <VerifiedIcon style={{ color: "#2AA7FF", verticalAlign: "top" }} />
          Stay Updated About Your Health
        </Typography>
        <Typography color={"text.specialistText"} pb={3}>
          <VerifiedIcon style={{ color: "#2AA7FF", verticalAlign: "top" }} />
          Check Your Results Online
        </Typography>
        <Typography color={"text.specialistText"} pb={3}>
          <VerifiedIcon style={{ color: "#2AA7FF", verticalAlign: "top" }} />
          Manage Your Appointments
        </Typography>
      </Box>
    </Box>
  );
};

export default GoalSection;
