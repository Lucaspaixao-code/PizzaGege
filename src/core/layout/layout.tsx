import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#E93232"
        },
        info: {
            main: "#fdfdfd"
        },
    },
    typography:{
       fontFamily: "'DM Sans', sans-serif;" 
    }
})

export default theme;