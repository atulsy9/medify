import { Box, Button, TextField, IconButton, Typography } from "@mui/material";
import "./SearchBox.css";
import SearchIcon from "@mui/icons-material/Search";
import Ambulance from "../../../../assests/Ambulance.png";
import capsule from "../../../../assests/Capsule.png";
import Hospital from "../../../../assests/Hospital.png";
import Drugstore from "../../../../assests/Drugstore.png";
import Doctor from "../../../../assests/Doctor.png";

const SearchBox = () => {
  const searchBoxData = [
    { name: "Doctor", pic: Doctor },
    { name: "Lab", pic: Drugstore },
    { name: "Hospital", pic: Hospital },
    { name: "Medical Store", pic: capsule },
    { name: "Ambulance", pic: Ambulance },
  ];
  return (
    <Box className="searchBox">
      <Box className="searchField">
        <Box
          display={"flex"}
          flexDirection={"row"}
          width={"80%"}
          justifyContent={"space-evenly"}
        >
          <TextField
            id="outlined-basic"
            label="State"
            variant="outlined"
            className="searchField-innerTextField"
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="City"
            className="searchField-innerTextField"
          />
        </Box>
        <Button variant="contained" width={"8rem"}>
          <IconButton>
            <SearchIcon sx={{ color: "white" }} />
          </IconButton>
          Search
        </Button>
      </Box>
      <Typography variant="h5" color="text.secondary">
        You may be looking for
      </Typography>
      <Box className="sectionMainDiv">
        {searchBoxData.map((ele) => {
          return (
            <Box key={ele.name} className="sectioncard">
              <img src={ele.pic} alt="" />
              <Typography variant="h6" color="text.text" fontSize={"18px"}>
                {ele.name}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default SearchBox;
