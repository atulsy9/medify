import { Box, Button, IconButton, Typography } from "@mui/material";
import "./SearchBox.css";
import InputAdornments from "../../../muiComponents/InputCustom";
import SearchIcon from "@mui/icons-material/Search";
import Ambulance from "../../../../assests/Ambulance.png";
import capsule from "../../../../assests/Capsule.png";
import Hospital from "../../../../assests/Hospital.png";
import Drugstore from "../../../../assests/Drugstore.png";
import Doctor from "../../../../assests/Doctor.png";
import { useEffect, useState } from "react";
import { config } from "../../../../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SearchBox = ({ detailPage, currentState, currentCity, icon }) => {
  const navigate = useNavigate();
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  const [selectedState, SetSelectedState] = useState(currentState);
  const [selectedCity, setSelectedCity] = useState(currentCity);
  const searchBoxData = [
    { name: "Doctor", pic: Doctor },
    { name: "Lab", pic: Drugstore },
    { name: "Hospital", pic: Hospital },
    { name: "Medical Store", pic: capsule },
    { name: "Ambulance", pic: Ambulance },
  ];

  const handleStateChange = (e) => {
    let state = e.target.textContent;
    SetSelectedState(state);
    setSelectedCity("");
  };

  const handleCityChange = (e) => {
    let city = e.target.textContent;
    setSelectedCity(city);
  };

  const getState = async () => {
    try {
      let res = await axios.get(`${config.endpoint}/states`);
      setState(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCity = async () => {
    if (selectedState) {
      try {
        let res = await axios.get(`${config.endpoint}/cities/${selectedState}`);
        setCity(res.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    if (selectedState && selectedCity) {
      let medicalCenter = await handelSearch();
      console.log(medicalCenter);
      navigate("/details", {
        state: {
          data: {
            states: selectedState,
            city: selectedCity,
            medicalCenterList: medicalCenter,
          },
        },
      });
    }
  };

  const handelSearch = async () => {
    try {
      // console.log(
      //   `${config.endpoint}/data?state=${selectedState}&city=${selectedCity}`
      // );
      let res = await axios.get(
        `${config.endpoint}/data?state=${selectedState}&city=${selectedCity}`
      );
      // setMedicalCenter(res.data);
      return res.data;
    } catch (error) {}
  };

  useEffect(() => {
    getState();
  }, []);

  useEffect(() => {
    getCity();
  }, [selectedState]);

  return (
    <Box className={detailPage ? "searchDiv" : "searchBox"}>
      <form className="formDiv" onSubmit={handelSubmit}>
        <Box
          display={"flex"}
          flexDirection={"row"}
          width={"80%"}
          justifyContent={"space-evenly"}
        >
          <InputAdornments
            IconDiv={detailPage ? icon : SearchIcon}
            name={detailPage ? selectedState : "State"}
            data={state}
            onChange={handleStateChange}
          />
          <InputAdornments
            IconDiv={detailPage ? icon : SearchIcon}
            name={detailPage ? selectedCity : "City"}
            data={city}
            onChange={handleCityChange}
          />
        </Box>
        <Button variant="contained" width={"8rem"} type="submit">
          <IconButton>
            <SearchIcon sx={{ color: "white" }} />
          </IconButton>
          Search
        </Button>
      </form>
      {!detailPage ? (
        <>
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
        </>
      ) : null}
    </Box>
  );
};

export default SearchBox;
