import Colors from "../../theme/Color";

export const carouselBox = {
  maxWidth: "100%",
  mt: { xs: 7, sm: 8, md: 8, lg: 8 },
  backgroundColor: Colors.lightBlue,
};

export const imageBox = {
  height: {
    xs: 230,
    sm: 300,
    lg: 450,
  },
  display: "block",
  overflow: "hidden",
  width: "100%",
  backgroundColor: "#DAE3F8",
};

export const img = {
  objectFit: "cover",
  width: "100%",
  height: "100%",
};

export const boxIcons = {
  mt: { xs: -18, sm: -22, md: -15, lg: -32 },
  zIndex: 1,
};

export const iconButton = {
  "&:hover": {
    backgroundColor: Colors.darkBlue,
    color: Colors.white,
  },
};

export const stepper = {
  zIndex: 2,
  position: "relative",
  mt: { xs: 14, sm: 16, lg: 28 },
  background: "transparent",
  justifyContent: "center",
  ".MuiMobileStepper-dot.MuiMobileStepper-dotActive": {
    backgroundColor: Colors.darkBlue,
  },
};
