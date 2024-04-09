import { Box, Typography } from "@mui/material";
import "./BlogSection.css";
import newsSecImg from "../../assests/blogSecImg.jpeg";
import IconPic from "../../assests/inonPic.jpeg";

const BlogSection = () => {
  return (
    <Box className="blogSectionOuterDiv">
      <Typography color={"text.blue"} fontSize={16}>
        Blogs & News
      </Typography>
      <Typography color={"text.specialistText"} fontSize={48}>
        Read Our Latest News
      </Typography>
      <Box display={"flex"} width={"80%"} justifyContent={"space-between"}>
        <Box className="newsCard">
          <img src={newsSecImg} alt="" style={{ borderRadius: "8px" }} />
          <Box m={2}>
            <Box color={"text.grey"} display={"flex"} alignItems={"center"}>
              <Typography pr={3}>Medical</Typography>
              <div
                style={{ borderLeft: "1px solid black", height: "16px" }}
              ></div>
              <Typography pl={3}>March 31, 2022</Typography>
            </Box>
            <Typography color={"text.specialistText"} py={2}>
              6 Tips To Protect Your Mental Health When You’re Sick
            </Typography>
            <Box display={"flex"}>
              <img src={IconPic} alt="" width={"32px"} height={"32px"} />
              <Typography color={"text.specialistText"} pl={2}>
                Rebecca Lee
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className="newsCard">
          <img src={newsSecImg} alt="" style={{ borderRadius: "8px" }} />
          <Box m={2}>
            <Box color={"text.grey"} display={"flex"} alignItems={"center"}>
              <Typography pr={3}>Medical</Typography>
              <div
                style={{ borderLeft: "1px solid black", height: "16px" }}
              ></div>
              <Typography pl={3}>March 31, 2022</Typography>
            </Box>
            <Typography color={"text.specialistText"} py={2}>
              6 Tips To Protect Your Mental Health When You’re Sick
            </Typography>
            <Box display={"flex"}>
              <img src={IconPic} alt="" width={"32px"} height={"32px"} />
              <Typography color={"text.specialistText"} pl={2}>
                Rebecca Lee
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className="newsCard">
          <img src={newsSecImg} alt="" style={{ borderRadius: "8px" }} />
          <Box m={2}>
            <Box color={"text.grey"} display={"flex"} alignItems={"center"}>
              <Typography pr={3}>Medical</Typography>
              <div
                style={{ borderLeft: "1px solid black", height: "16px" }}
              ></div>
              <Typography pl={3}>March 31, 2022</Typography>
            </Box>
            <Typography color={"text.specialistText"} py={2}>
              6 Tips To Protect Your Mental Health When You’re Sick
            </Typography>
            <Box display={"flex"}>
              <img src={IconPic} alt="" width={"32px"} height={"32px"} />
              <Typography color={"text.specialistText"} pl={2}>
                Rebecca Lee
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BlogSection;
