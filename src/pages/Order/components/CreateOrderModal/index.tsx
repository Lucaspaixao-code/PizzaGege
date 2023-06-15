import { Grid, TextField } from "@mui/material";
import ModalDefault from "../../../../components/Modal";
import IOrderType from "../../types/OrderType";

interface props{
    open: boolean;
    close: () => void;
    handleSave: (data: IOrderType) => void;
}

export default function CreateOrderModal({open,close,handleSave}: props){
    return (
        <ModalDefault open={open} handleClose={close} title="Criar Pedido" size="md">
            <Grid xs={12} container spacing={2}>
                <TextField name="client" label={"Cliente"}/>
            </Grid>
        </ModalDefault>
    );
}