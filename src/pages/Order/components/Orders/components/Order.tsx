import { Stack, Typography } from "@mui/material";
import IOrderType from "../../../types/OrderType";

interface props {
    order: IOrderType
}

export default function Order({order}: props){
    return (
        <Stack sx={{
            width: "100%",
            height: `calc(15% + ${order.pizzas.length})`,
            backgroundColor: "#eeeeee",
            border: "0.1px solid #ec9c9c",
            borderRadius: "5px",
            padding: "0.5rem"
        }}>
            <Stack sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
            }}>
            <Typography variant="body1"><b>{order.name.toUpperCase()}</b></Typography>
            <Typography variant="body1" color={"primary"}>R$ 30</Typography>
            </Stack>
    
            <Stack sx={{
                width: "100%",
                height: "100%",
                display: "flex",
            }}>
            {order.pizzas.filter((pizza) => pizza.pizza).map((pizza)=> {
                return <Stack sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "3px"
                }}>
                    <Typography variant="body1">Pizza de</Typography>
                    <Typography variant="body1" color={"primary"}>{pizza.pizza}</Typography>
                    <Typography variant="body1">x {pizza.quantity}</Typography>
                </Stack>
            })}
            </Stack>
            <Stack>
            <Stack sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "3px"
                }}>
                    <Typography variant="body1" color={"primary"}>Endereço:</Typography>
                    <Typography variant="body1">{order.address}</Typography>
                </Stack>
                <Stack sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "3px"
                }}>
                    <Typography variant="body1" color={"primary"}>Desconto:</Typography>
                    <Typography variant="body1">{order.discount}%</Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}