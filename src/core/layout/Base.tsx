import { Outlet } from "react-router-dom";
import DrawerLeft from "../components/Drawer";
import { Grid, Stack } from "@mui/material";
import Header from "../components/Header";
import { TitleContextProvider } from "../components/Header/context/TitleContext";

export default function Base() {
    return (
        <TitleContextProvider>
            <Grid xs={12} container>
                <Grid xs={0.4}>
                    <DrawerLeft />
                </Grid>
                <Grid xs={11.6}>
                    <Stack sx={{
                        height: "98.1vh",
                        backgroundColor: "info.main",
                        borderRadius: "10px"
                    }}>
                        <Stack sx={{
                            height: "10%",
                            paddingBottom: "30px"
                        }}>
                            <Header />
                        </Stack>
                        <Outlet />
                    </Stack>
                </Grid>
            </Grid>
        </TitleContextProvider>

    )
}