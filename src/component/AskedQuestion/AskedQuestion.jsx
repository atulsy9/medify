import { Box, Typography } from "@mui/material";
import "./AskedQuestion.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddIcon from "@mui/icons-material/Add";
import image from "../../assests/askedQus/pic.png";
import icon from "../../assests/askedQus/icon.png";
import smileyImg from "../../assests/askedQus/Frame.png";

const AskedQuestion = () => {
  const questions = [
    { qus: "Why choose our medical for your family?" },
    { qus: "Why we are different from others?" },
    { qus: "Trusted & experience senior care & love" },
    { qus: "How to get appointment for emergency cases?" },
  ];
  return (
    <Box className="askedQusMainDiv">
      <Typography color={"text.blue"} fontSize={16} fontWeight={600}>
        Get Your Answer
      </Typography>
      <Typography color={"text.specialistText"} fontSize={48} fontWeight={600}>
        Frequently Asked Questions
      </Typography>
      <Box display={"flex"} flexDirection={"row"} mt={6}>
        <Box width={"50%"} className="imageDiv">
          <img src={image} alt="" className="innerImage" />
          <div width="80" height="80" className="innerImgSpanDiv">
            <img src={icon} alt="" />
          </div>
          <Box className="smileyDiv">
            <img src={smileyImg} alt="" width={44} height={44} />
            <Box>
              <Typography
                fontSize={24}
                fontWeight={600}
                color={"text.specialistText"}
              >
                84k+
              </Typography>
              <Typography fontSize={16} fontWeight={400} color={"text.grey"}>
                Happy Patients
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box width={"50%"} alignContent={"space-evenly"}>
          {questions.map((data, idx) => {
            return (
              <Accordion
                key={idx}
                style={{ marginBottom: "5%" }}
                className="accordianMainDiv"
                sx={{
                  "&:before": {
                    display: "none",
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<AddIcon color={"primary"} />}
                  //   aria-controls="panel1-content"
                  //   id="panel1-header"
                >
                  <Typography color={"text.grey"}>{data.qus}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color={"text.grey"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default AskedQuestion;
