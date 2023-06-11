import { Stack, Typography } from "@mui/material";
import IOrderType from "../../../types/OrderType";

interface props {
    order: IOrderType
}

export default function Order({order}: props){
    return (
        <Stack sx={{
            width: "100%",
            height: "15%",
            backgroundColor: "#eeeeee",
            border: "0.1px solid #ec9c9c",
            borderRadius: "5px",
            padding: "0.5rem"
        }}>
            <Typography>{order.name}</Typography>
        </Stack>
    )
}