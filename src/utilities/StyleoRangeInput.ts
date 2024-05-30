import { styled } from "@mui/material/styles";
import { Slider } from "@mui/material";

export const Price = styled(Slider)(({ theme }) => ({
  color: "#461453",
  height: 3,
  width: "90%",
  padding: "22px 0",
  "& .MuiSlider-thumb": {
    height: 27,
    width: 27,
    backgroundColor: "#461453",
    border: "3px solid white",
    "&:hover": {
      boxShadow: "0 0 0 8px #4614532f",
    },
    "& .airbnb-bar": {
      height: 9,
      width: 1,
      backgroundColor: "currentColor",
      marginLeft: 1,
      marginRight: 1,
    },
  },
  "& .MuiSlider-valueLabel": {
    fontSize: 12,
    fontWeight: "normal",
    top: 50,
    backgroundColor: "unset",
    color: theme.palette.text.primary,
    "&::before": {
      display: "none",
    },
  },
  "& .MuiSlider-track": {
    height: 3,
  },
  "& .MuiSlider-rail": {
    height: 3,
  },
}));
