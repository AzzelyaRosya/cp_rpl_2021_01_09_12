import Colors from "../../theme/Color";

export const appBar = { backgroundColor: Colors.darkBlue };
// Desktop Ver
export const desktopBox = {
  display: "flex",
  justifyContent: "left",
  alignItems: "left",
  width: {
    md: "75%",
    lg: "75%",
  },
};
export const boxCompany = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
export const logoDesktop = {
  display: { xs: "none", md: "flex" },
  mr: 1,
  width: 35,
  height: 35,
  pb: 0.5,
};
export const companyNameDesktop = {
  display: { xs: "none", md: "flex" },
  fontWeight: 700,
  color: Colors.white,
  textDecoration: "none",
  fontSize: 18,
};
export const boxMenuDesktop = {
  flexGrow: 1,
  display: { xs: "none", md: "flex" },
};
export const subMenuDesktop = {
  mr: 2.2,
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center",
  display: { xs: "none", md: "flex" },
  width: 93,
  height: 30,
  color: Colors.white,
  borderRadius: 8,
  fontWeight: 500,
  fontSize: 15,
  textDecoration: "none",
  textTransform: "capitalize",
  "&:hover": {
    backgroundColor: Colors.white,
    borderRadius: 8,
    color: Colors.darkBlue,
  },
  "&:active": {
    backgroundColor: Colors.white,
    borderRadius: 7,
    color: Colors.darkBlue,
  },
};

// Mobile Ver
export const boxMenuMobile = {
  flexGrow: 1,
  display: { xs: "flex", sm: "flex", md: "none", lg: "none" },
};
export const menuMobile = { display: { xs: "block", md: "none" } };
export const subMenuMobile = {
  fontWeight: 300,
  color: Colors.black,
  textDecoration: "none",
  fontSize: 14,
  justifyContent: "flex-end",
};
export const logoMobile = {
  display: { xs: "flex", md: "none" },
  mr: 1,
  width: 25,
  height: 25,
  pb: 0.5,
};
export const companyNameMobile = {
  display: { xs: "flex", md: "none" },
  fontWeight: 700,
  color: Colors.white,
  textDecoration: "none",
  fontSize: 15,
};

// Translate Menu
export const buttonTranslate = {
  color: Colors.white,
  p: 0,
};

export const menuTranslate = {
  mt: "45px",
};

export const subMenuTranslate = {
  textAlign: "center",
  fontSize: 14,
};
