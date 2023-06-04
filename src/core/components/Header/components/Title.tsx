import { Grid, Typography } from "@mui/material";
import useTitle from "../hook/useTitle";

export default function Title(){
    const {title} = useTitle()
    return (
        <Grid xs={1} sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
        <Typography variant="h6">{title}</Typography>
        </Grid>
    )
}