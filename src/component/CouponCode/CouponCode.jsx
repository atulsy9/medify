import { Box, Grid } from "@mui/material";
import "./CouponCode.css";
import pic1 from "../../assests/gridpic1.png";
import pic2 from "../../assests/gridpic2.png";
import pic3 from "../../assests/gridpic3.png";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const CouponCode = () => {
  return (
    <Box position={"relative"}>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        loop={true}
      >
        <SwiperSlide>
          <Grid container flexWrap={"nowrap"}>
            <Grid>
              <img src={pic1} alt="" />
            </Grid>
            <Grid>
              <img src={pic2} alt="" />
            </Grid>
            <Grid>
              <img src={pic1} alt="" />
            </Grid>
          </Grid>
        </SwiperSlide>
        <SwiperSlide>
          <Grid container flexWrap={"nowrap"}>
            <Grid>
              <img src={pic2} alt="" />
            </Grid>
            <Grid>
              <img src={pic1} alt="" />
            </Grid>
            <Grid>
              <img src={pic3} alt="" />
            </Grid>
          </Grid>
        </SwiperSlide>
        <SwiperSlide>
          <Grid container flexWrap={"nowrap"}>
            <Grid>
              <img src={pic1} alt="" />
            </Grid>
            <Grid>
              <img src={pic2} alt="" />
            </Grid>
            <Grid>
              <img src={pic1} alt="" />
            </Grid>
          </Grid>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default CouponCode;
