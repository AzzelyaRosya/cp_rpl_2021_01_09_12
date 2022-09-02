import { Box, IconButton, MobileStepper } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import * as React from "react";
// Import Styles
import {
  boxIcons,
  carouselBox,
  iconButton,
  imageBox,
  img,
  stepper,
} from "./styles";
// Import Icons
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
// Import Data
import { images } from "./data";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function CarouselBanner() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    if (activeStep === maxSteps - 1) {
      setActiveStep(0);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
      <Box sx={carouselBox}>
        {/* <Paper, 
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          bgcolor: "background.default",
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper,> */}
        {/* Images */}
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box sx={imageBox}>
                  <img src={step.imgPath} alt={step.label} style={img}></img>
                </Box>
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>

        <Box sx={boxIcons}>
          <IconButton
            onClick={handleBack}
            disabled={activeStep === 0}
            style={{ left: 0, float: "left" }}
            sx={iconButton}
          >
            <KeyboardArrowLeft />
          </IconButton>
          <IconButton
            onClick={handleNext}
            style={{ right: 0, float: "right" }}
            sx={iconButton}
          >
            <KeyboardArrowRight />
          </IconButton>
        </Box>
        <MobileStepper sx={stepper} steps={maxSteps} activeStep={activeStep} />
      </Box>
    </>
  );
}

export default CarouselBanner;
