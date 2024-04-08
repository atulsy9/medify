import { Box, Typography } from "@mui/material";
import "./SpecialisationDisplay.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import doctor1 from "../../assests/Specalists/doctor1.png";
import doctor2 from "../../assests/Specalists/doctor2.png";
import doctor3 from "../../assests/Specalists/doctor3.png";
import doctor4 from "../../assests/Specalists/doctor4.png";
import doctor5 from "../../assests/Specalists/doctor5.png";

const SpecialisationDisplay = () => {
  const SpecalistData = [
    { name: "Dr. Ankur Sharma", pic: doctor1, category: "Medicine" },
    { name: "Dr. Ahmad Khan", pic: doctor2, category: "Neurologist" },
    { name: "Dr. Heena Sachdeva", pic: doctor3, category: "Orthopadics" },
    { name: "Dr. Lesley Hull", pic: doctor4, category: "Medicine" },
    { name: "doctor5", pic: doctor5, category: "Neurologist" },
  ];
  return (
    <Box className="SpecialistMainDiv">
      <Typography variant="h2" color="#1B3C74" textAlign={"center"} pt={8}>
        Our Medical Specialist
      </Typography>
      <Swiper
        slidesPerView={4}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper SpecialistSwiper"
      >
        {SpecalistData.map((data, index) => {
          return (
            <SwiperSlide key={index}>
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
              >
                <Box className="SpecialistDiv">
                  <div>
                    <img src={data.pic} alt="" />
                  </div>
                </Box>
                <Typography
                  color="text.specialistText"
                  fontWeight={400}
                  fontSize={"24px"}
                  mt={1.5}
                >
                  {data.name}
                </Typography>
                <Typography color="text.blue">{data.category}</Typography>
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default SpecialisationDisplay;
