import { Box, Button, Grid, Typography } from "@mui/material";
import "./SpecialisationCard";
import BloodTest from "../../assests/Specialisation/blood test.png";
import Cardiology from "../../assests/Specialisation/Cardiology.png";
import dentistry from "../../assests/Specialisation/dentistry.png";
import Laboratory from "../../assests/Specialisation/Laboratory.png";
import MRIResonance from "../../assests/Specialisation/MRI Resonance.png";
import Piscologist from "../../assests/Specialisation/Piscologist.png";
import PrimaryCare from "../../assests/Specialisation/primary care.png";
import Xray from "../../assests/Specialisation/X-Ray.png";

const SpecalistData = [
  { name: "Dentistry", pic: dentistry },
  { name: "Primary Care", pic: PrimaryCare },
  { name: "Cardiology", pic: Cardiology },
  { name: "MRI Resonance", pic: MRIResonance },
  { name: "Blood Test", pic: BloodTest },
  { name: "Piscologist", pic: Piscologist },
  { name: "Laboratory", pic: Laboratory },
  { name: "X-Ray", pic: Xray },
];

const SpecialisationCard = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <Typography variant="h3" color="#1B3C74">
        Find By Specialisation
      </Typography>
      <Grid container gap={3} px={12} justifyContent={"center"} mt={"5%"}>
        {SpecalistData.map((val) => {
          return (
            <Grid lg={2.5} key={val.name}>
              <Box className="specialisationCard">
                <img src={val.pic} alt="" />
                <Typography color="#ABB6C7" mt={2}>
                  {val.name}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
      <Button variant="contained" sx={{ margin: "5%" }}>
        View All
      </Button>
    </Box>
  );
};

export default SpecialisationCard;
