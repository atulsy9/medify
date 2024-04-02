import "./Navbar.css";
import logoImage from "../../../assests/logo.png";
import { Button, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <div className="navbar-mainDiv">
      <img src={logoImage} alt="" />
      <div className="navBar-innerdiv">
        <Typography p={1} fontSize={"14px"}>
          Find Doctors
        </Typography>
        <Typography p={1} fontSize={"14px"}>
          Hospitals
        </Typography>
        <Typography p={1} fontSize={"14px"}>
          Medicines
        </Typography>
        <Typography p={1} fontSize={"14px"}>
          Surgeries
        </Typography>
        <Typography p={1} fontSize={"14px"}>
          Software for Provider
        </Typography>
        <Typography p={1} fontSize={"14px"}>
          Facilities
        </Typography>
        <Button variant="contained" sx={{ margin: "0.5rem" }}>
          My Booking
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
