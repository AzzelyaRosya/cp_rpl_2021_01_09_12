import Colors from "../../theme/Color";

// Vision Mission
export const visionBox = {
  width: "100%",
  backgroundColor: Colors.lightBlue,
  height: { xs: "330px", sm: "340px", lg: "330px" },
  display: "flex",
  borderBottomRightRadius: 20,
  borderBottomLeftRadius: 20,
  justifyContent: "center",
};
export const gridVision = { ml: { xs: 2, sm: 2 }, pr: { xs: 1, sm: 1 } };
export const imgBanner = { margin: "auto", display: "block" };
export const titleVision = {
  fontSize: {
    lg: 52,
    md: 48,
    sm: 42,
    xs: 16,
  },
  fontWeight: 700,
  color: Colors.darkBlue,
  mt: { xs: -4, sm: -5, md: 2, lg: 2 },
};
export const descVision = {
  fontSize: {
    lg: 16,
    md: 10,
    sm: 10,
    xs: 8,
  },
  fontWeight: 400,
  color: Colors.darkBlue,
};

export const textTitle = {
  fontWeight: "700",
  fontSize: {
    xs: 21.7,
    sm: 30,
    md: 35,
    lg: 35,
  },
  color: Colors.darkBlue,
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center",
  textTransform: "uppercase",
  mt: {
    xs: 3,
    sm: 4.5,
    md: 3,
  },
  mb: 3,
};

// Card
export const gridCard = {
  display: "flex",
  justifyContent: "center",
};

export const hrCard = {
  width: 40,
  border: 2,
  borderColor: Colors.white,
  borderStyle: "solid",
};
export const descCard = {
  mt: 2,
  fontSize: 15,
  color: Colors.white,
  pl: 2,
  pr: 2,
};

// Company Detail
export const boxDetail = {
  width: "100%",
  backgroundColor: "#DAE3F8",
  // height: { xs: "330px", sm: "340px", lg: "600x" },
  height: "600px",
  borderRadius: 5,
  justifyContent: "center",
  mt: 7,
};
export const gridDetail = {
  pt: 1,
  justifyContent: "center",
  margin: "auto",
};
export const gridCompanyDetail = {
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  mb: 3,
};
export const nameCompany = {
  fontWeight: "700",
  fontSize: {
    xs: 21.7,
    sm: 20,
    md: 20,
    lg: 20,
  },
  color: "#36476B",
  textTransform: "uppercase",
};
export const address = {
  fontSize: 16,
  width: 500,
  color: Colors.darkBlue,
};
export const textContact = {
  fontSize: 16,
  color: Colors.darkBlue,
};
export const iconContact = {
  mr: 1.5,
  color: "#36476B",
  width: 30,
  height: 30,
};
export const boxMaps = {
  width: 1000,
  alignItems: "center",
  justifyContent: "center",
  margin: "auto",
};

// Contact
export const boxContact = {
  width: "60%",
  height: 420,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: Colors.darkBlue,
  margin: "auto",
  borderRadius: 3,
  mb: 3,
};
export const titleTextfield = {
  textAlign: "left",
  fontSize: 16,
  color: Colors.white,
  mb: 1,
};
export const textFields = {
  width: "100%",
  backgroundColor: Colors.white,
  borderRadius: 2,
  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    border: "1.5px solid",
    borderColor: Colors.white,
    borderRadius: 2,
  },
  "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: Colors.white,
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: Colors.white,
  },
  "& .MuiInputBase-root": {
    paddingTop: "9px",
  },
};
export const submitButton = {
  color: Colors.white,
  backgroundColor: "#6D8CD0",
  "&:hover": {
    backgroundColor: "#6D8CD0",
  },
  width: 150,
  height: 40,
  fontSize: 16,
  textTransform: "uppercase",
  textDecoration: "none",
  justifyContent: "center",
  alignItems: "center",
  mt: 3,
};
