import { InputBase } from "@material-ui/core";
import { styled, alpha } from "@mui/material/styles";
export const SearchStyle = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: "50px",
    width: "50%",
    backgroundColor: alpha(theme.palette.grey[500], 0.15),
    "&:hover": {
      border: "1px solid black",
    },
  }));
  
  export const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  
export   const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      width: "100%",
    },
  }));