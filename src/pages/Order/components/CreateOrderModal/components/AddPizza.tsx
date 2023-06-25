import { Button, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import PizzasOrderType from "../../../types/PizzasOrderType";
import { useFormik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import PizzasMock from "../../../mock/pizzas";
import { Delete } from "@mui/icons-material";

interface props {
    handleAdd: (pizza: PizzasOrderType) => void;
    handleRemove: () => void;
}

export default function AddPizza({handleAdd,handleRemove}: props){
    const [showQuantity,setShowQuantity] = useState(false);
    const [addedPizza,setAddedPizza] = useState(false)

    const validation = yup.object<PizzasOrderType>({
        pizza: yup.string().required("Selecione uma Pizza"),
        quantity: yup.number().moreThan(0,"A quantidade não pode ser 0").required("Defina uma quantidade para a pizza selecionada")
    })


    const form = useFormik<PizzasOrderType>({
        initialValues: {
            pizza: "",
            quantity: 0,
        },
        onSubmit: handleAdd,
        validationSchema: validation
    })

    const handleChangePizza = (pizza: string) => {
        form.setFieldValue("pizza",pizza)
        setShowQuantity(true)
    }

    const handleSendPizza = () => {
        setAddedPizza(true);
        form.handleSubmit()
    }

    return (
        <Grid xs={12} container spacing={2}>
            <Grid item xs={showQuantity ? 8 : 6}>
            <FormControl fullWidth>
            <InputLabel id="select-pizza">Pizza</InputLabel>
                <Select
                labelId="select-pizza"
                label="Pizza"
                fullWidth
                onChange={(e)=> handleChangePizza(e.target.value as string)}
                onBlur={form.handleBlur}
                error={form.touched.pizza && Boolean(form.errors.pizza)}
                >
                    {PizzasMock.map((pizza,index)=>(
                        <MenuItem value={pizza} key={index}>{pizza}</MenuItem>
                    ))}
                </Select>
                </FormControl>
            </Grid>
            {showQuantity && (
                <Grid item xs={addedPizza ? 3 : 2}>
                <TextField name="quantity" 
                label={"Quantidade*"} 
                fullWidth 
                type="number"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                error={form.touched.quantity && Boolean(form.errors.quantity)}
                helperText={form.touched.quantity && form.errors.quantity}
                />   
                </Grid>             
            )}
            <Grid item xs={addedPizza ? 1 : 2}>
            {!addedPizza ? (
                <Button fullWidth 
                variant="contained" 
                disableElevation 
                size="large"
                disabled={!showQuantity}
                onClick={handleSendPizza}
                >Adicionar</Button>
            ) : (
                <IconButton onClick={handleRemove}><Delete color="primary" /></IconButton>
            )}
            </Grid>

        </Grid>
    );
}