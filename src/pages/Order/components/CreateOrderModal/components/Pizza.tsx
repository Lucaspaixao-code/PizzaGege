import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { FormikProps } from "formik";
import { useEffect, useState } from "react";
import IOrderType from "../../../types/OrderType";
import PizzasOrderType from "../../../types/PizzasOrderType";
import AddPizza from "./AddPizza";

interface props {
    form: FormikProps<IOrderType>
}

export default function Pizza({form}: props){
    const [pizzaManager,setPizzaManager] = useState<number[]>([1])
    const [pizzas,setPizzas] = useState<PizzasOrderType[]>([{pizza: "",quantity:0}])
    const handleAddPizzaManager = () => {
        setPizzaManager(p => [...p,1])
    }
    const handleAddPizza = (pizza: PizzasOrderType) => {
        console.log(pizza);
        setPizzas(p => [...p,pizza]);
    }

    const handleRemovePizza = (index:number) => {
        setPizzas(p => p.filter((_,i)=> i !== index))
        setPizzaManager(p => p.filter((_,i)=> i !== index))
    }

    useEffect(()=>{
        form.setFieldValue("pizzas",pizzas)
    },[pizzas.length])

    return (
        <>
        <Grid item xs={12} sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}><Typography variant="body1" sx={{
            color: "#474747",
            margin: 0
        }}>Pizzas</Typography></Grid>
    <Box sx={{
        width: "100%",
        maxHeight: "12rem",
        overflowY: "auto",
        overflowX: "hidden",
        border: "0.1px solid #a5a5a5",
        borderRadius: "5px",

    }}>
        <Box sx={{
            width: "99%",
            height: "100%",
            padding: "5px",

        }}>
            <Button 
            fullWidth 
            variant="contained" 
            onClick={handleAddPizzaManager}
            disabled = {pizzaManager.length > pizzas.length}
            disableElevation
            >Adicionar Pizza</Button>
            {pizzaManager.map((_,index)=>{
                return <Stack key={pizzas[index] ? pizzas[index].pizza : "kk"} p={1}>
                    <AddPizza handleAdd={handleAddPizza} handleRemove={() => handleRemovePizza(index)}  />
                </Stack>
            })}
        </Box>
    </Box>
        </>
    )
}