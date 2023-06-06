import { Grid } from "@mui/material";
import LogoSvg from "../../../../assets/logo.svg"

export default function Logo(){
    return (
        <Grid xs={11} sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
    }}>
    <img src={LogoSvg} alt="logo" width={"10%"} />
    </Grid>
    )
}