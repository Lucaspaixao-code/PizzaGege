import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import ModalDefault from "../../../../components/Modal";
import IOrderType from "../../types/OrderType";
import { useFormik, validateYupSchema } from "formik";
import * as yup from "yup";
import Pizza from "./components/Pizza";


interface props{
    open: boolean;
    close: () => void;
    handleSave: (data: IOrderType) => void;
}

export default function CreateOrderModal({open,close,handleSave}: props){
    const validation = yup.object<IOrderType>({
        name: yup.string().required("O nome do cliente é obrigatório"),
        address: yup.string().required("O endereço do cliente é obrigatório"),
    })

    const form = useFormik<IOrderType>({
        initialValues: {
            id: "",
            address: "",
            discount: 0,
            name: "",
            pizzas: []
        },
        onSubmit: handleSave,
        validationSchema: validation
    })

    const handleSaveOrder = () => {
        form.handleSubmit();
        close();
    }
    return (
        <ModalDefault 
        open={open} 
        handleClose={close} 
        title="Criar Pedido" 
        size="md"
        footer={(
            <Grid item xs={12} sx={{
                display: "flex"
            }}>
                <Grid item xs={6}></Grid>
                <Grid container spacing={1} xs={6}>
                    <Grid item xs={6}>
                    <Button variant="outlined" fullWidth onClick={close}>Voltar</Button>
                    </Grid>
                    <Grid item xs={6} sx={{
                        display: "flex",
                        alignItems: "flex-end"
                    }}>
                    <Button 
                    variant="contained" 
                    fullWidth 
                    onClick={handleSaveOrder}>Salvar</Button>
                    </Grid>
                </Grid>
            </Grid>
        )}>
            <Grid xs={12} container spacing={2}>
                <Grid item xs={8}>
                <TextField name="name" 
                label={"Cliente*"} 
                fullWidth 
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                error={form.touched.name && Boolean(form.errors.name)}
                helperText={form.touched.name && form.errors.name}
                />
                </Grid>
                <Grid item xs={4}>
                <TextField name="discount" 
                label={"Desconto"} 
                fullWidth 
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                error={form.touched.discount && Boolean(form.errors.discount)}
                helperText={form.touched.discount && form.errors.discount}
                />
                </Grid>
                <Grid item xs={12}>
                <TextField name="address" 
                label={"Endereço*"} 
                fullWidth 
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                error={form.touched.address && Boolean(form.errors.address)}
                helperText={form.touched.address && form.errors.address}
                />
                </Grid>
                <Grid item xs={12} sx={{
                    maxHeight: "12rem"
                }}>
                  <Pizza form={form} />
                </Grid>

            </Grid>
        </ModalDefault>
    );
}