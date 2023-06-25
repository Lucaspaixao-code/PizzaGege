import { Stack, Typography } from "@mui/material";
import Order from "./components/Order";
import IOrderType from "../../types/OrderType";
import { useEffect } from "react";

interface props {
    orders: IOrderType[]
}

export default function Orders({orders}: props){
    useEffect(()=>{
        console.log(orders);
    },[orders.length])

    return (
        <Stack sx={{
            width: "70%",
            height: "80%",
            backgroundColor: "#faf9f9",
            alignItems: "center",
            borderRadius: "10px",
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.25);",
            padding: "2rem"
        }}>
            {orders.length == 0 ? (
                <Typography variant="h6">
                    Nenhum pedido encontrado
                </Typography>
            ) : (
                orders.map((order, index)=>{
                    return <Order order={order} key={index}/>
                })
            )}
        </Stack>
    )
}