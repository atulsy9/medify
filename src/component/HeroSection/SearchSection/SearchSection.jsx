import "./SearchSection.css";
import { Box, Typography } from "@mui/material";
import heroImage from "../../../assests/NicePng_doctor-png_336282 1.png";
import Button from "@mui/material/Button";

const SearchSection = () => {
  return (
    <>
      <Box className="SearchSection-mainDiv">
        <Box pt={"10%"}>
          <Typography variant="h5" color="text.secondary">
            Skip the travel! Find Online
          </Typography>
          <Typography className="outerSpan-Div" color="text.secondary">
            Medical <span className="spanDiv"> Centers</span>
          </Typography>
          <Typography variant="h6" color="text.text" fontSize={"1rem"}>
            Connect instantly with a 24x7 specialist or choose to video visit a
            particular doctor.
          </Typography>
          <Button variant="contained" className="butttonSection">
            Find Ceners
          </Button>
        </Box>
        <div>
          <img src={heroImage} alt="" className="heroImage" />
        </div>
      </Box>
    </>
  );
};

export default SearchSection;
