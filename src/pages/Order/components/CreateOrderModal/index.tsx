import { Button, Grid, TextField } from "@mui/material";
import ModalDefault from "../../../../components/Modal";
import IOrderType from "../../types/OrderType";
import { useFormik, validateYupSchema } from "formik";

interface props{
    open: boolean;
    close: () => void;
    handleSave: (data: IOrderType) => void;
}

export default function CreateOrderModal({open,close,handleSave}: props){
    

    const form = useFormik<IOrderType>({
        initialValues: {
            id: "",
            address: "",
            discount: 0,
            name: "",
            pizzas: []
        },
        onSubmit: handleSave
        //validateYupSchema: 
    })
    return (
        <ModalDefault open={open} handleClose={close} title="Criar Pedido" size="md">
            <Grid xs={12} container spacing={2}>
                <Grid xs={8}>
                <TextField name="name" 
                label={"Cliente"} 
                fullWidth 
                onChange={form.handleChange}/>
                </Grid>
                <Button onClick={() => {form.handleSubmit()}}>Teste</Button>
            </Grid>
        </ModalDefault>
    );
}