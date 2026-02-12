import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    typography: {
      fontFamily: "'Poppins', sans-serif",
    },
    components: {
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: "#fff",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          border: "none",
        },
        root: {
          "&:hover .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        },
      },
    },
  },
  });

  export default theme;