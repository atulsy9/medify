import { Typography } from "@mui/material";
import "./Header.css";
import HeroSection from "../HeroSection/HeroSection";

const HEADERMESSAGE =
  " The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.";
const Header = () => {
  return (
    <>
      <Typography
        variant="h6"
        align="center"
        className="headerMessage"
        color="text.primary"
      >
        {HEADERMESSAGE}
      </Typography>
      <HeroSection />
    </>
  );
};

export default Header;
