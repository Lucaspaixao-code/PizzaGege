import { Grid } from "@mui/material";
import Logo from "./components/Logo";
import Title from "./components/Title";


export default function Header() {
    return (
        <Grid xs={12} container sx={{
            width: "100%",
            flexDirection: "row"
        }}>
            <Title/>
            <Logo />
            
        </Grid>
    )
}