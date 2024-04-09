import { Box, Typography } from "@mui/material";
import "./ReachesSection.css";
import pic1 from "../../assests/reachesPic/span.elementor-icon.png";
import pic2 from "../../assests/reachesPic/span.elementor-icon (1).png";
import pic3 from "../../assests/reachesPic/span.elementor-icon (2).png";
import pic4 from "../../assests/reachesPic/span.elementor-icon (3).png";

const ReachesSection = () => {
  return (
    <Box className="reachsMainDiv">
      <Box width={"50%"} p={5} display={"flex"} className="cardLeftSection">
        <Typography color={"text.blue"} fontSize={17} fontWeight={600}>
          CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
        </Typography>
        <Typography
          color={"text.specialistText"}
          fontSize={48}
          fontWeight={600}
        >
          Our Families
        </Typography>
        <Typography color={"text.grey"} fontSize={17} fontWeight={500}>
          We will work with you to develop individualised care plans, including
          management of chronic diseases. If we cannot assist, we can provide
          referrals or advice about the type of practitioner you require. We
          treat all enquiries sensitively and in the strictest confidence.
        </Typography>
      </Box>
      <Box width={"50%"} className="cardMainDiv">
        <Box display={"flex"} justifyContent={"space-around"}>
          <Box className="card" top={"-2rem"}>
            <img src={pic1} alt="" width={100} height={100} />
            <Typography
              fontSize={48}
              color={"text.specialistText"}
              fontWeight={600}
            >
              5000+
            </Typography>
            <Typography fontSize={18} color={"text.grey"} fontWeight={500}>
              Happy Patients
            </Typography>
          </Box>
          <Box className="card" bottom={"-2rem"}>
            <img src={pic2} alt="" width={100} height={100} />
            <Typography
              fontSize={48}
              color={"text.specialistText"}
              fontWeight={600}
            >
              200+
            </Typography>
            <Typography fontSize={18} color={"text.grey"} fontWeight={500}>
              Hospitals
            </Typography>
          </Box>
        </Box>
        <Box display={"flex"} justifyContent={"space-around"}>
          <Box className="card" top={"-2rem"}>
            <img src={pic3} alt="" width={100} height={100} />
            <Typography
              fontSize={48}
              color={"text.specialistText"}
              fontWeight={600}
            >
              1000+
            </Typography>
            <Typography fontSize={18} color={"text.grey"} fontWeight={500}>
              Laboratories
            </Typography>
          </Box>
          <Box className="card" bottom={"-2rem"}>
            <img src={pic4} alt="" width={100} height={100} />
            <Typography
              fontSize={48}
              color={"text.specialistText"}
              fontWeight={600}
            >
              700+
            </Typography>
            <Typography fontSize={18} color={"text.grey"} fontWeight={500}>
              Expert Doctors
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ReachesSection;
