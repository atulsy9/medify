import "./Navbar.css";
import logoImage from "../../../assests/logo.png";
import { Button, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <div className="navbar-mainDiv">
      <img src={logoImage} alt="" />
      <div className="navBar-innerdiv">
        <Typography m={2}>Find Doctors</Typography>
        <Typography m={2}>Hospitals</Typography>
        <Typography m={2}>Medicines</Typography>
        <Typography m={2}>Surgeries</Typography>
        <Typography m={2}>Software for Provider</Typography>
        <Typography m={2}>Facilities</Typography>
        <Button variant="contained" sx={{ margin: "0.5rem" }}>
          Login/Signup
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
