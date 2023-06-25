import { Button, Grid, TextField } from "@mui/material";
import ModalDefault from "../../../components/Modal";
import { useFormik } from "formik";
import IStockType from "../types/PizzaStockType";
import StockMock from "../mock/Stock";

interface Props {
  open: boolean;
  close: () => void;
  stock: IStockType | null;
}

export default function CreateStockModal({ open, close, stock }: Props) {
  const form = useFormik<IStockType>({
    initialValues: stock
      ? { ...stock }
      : {
          id: "",
          name: "",
          expiration_date: "",
          qtde: 0,
          cost: 0,
          desc: ""
        },
    onSubmit: (values) => {
      if (stock) {
        const updatedStocks = StockMock.map((item) =>
          item.id === stock.id ? values : item
        );
        StockMock.length = 0;
        StockMock.push(...updatedStocks);
      } else {
        StockMock.push(values);
      }
      form.resetForm();
      close();
    }
  });

  const handleDelete = () => {
    if (stock) {
      const updatedStocks = StockMock.filter((item) => item.id !== stock.id);
      StockMock.length = 0;
      StockMock.push(...updatedStocks);
    }
    close();
  };

  return (
    <ModalDefault
      open={open}
      handleClose={close}
      title="Adicionar Pizza ao estoque"
      size="md"
    >
      <div style={{ display: "flex" }}>
        <Grid xs={8}>
          <TextField
            name="name"
            label="Pizza"
            fullWidth
            value={form.values.name}
            onChange={form.handleChange}
          />
          <TextField
            name="expiration_date"
            label="Data de vencimento"
            fullWidth
            value={form.values.expiration_date}
            onChange={form.handleChange}
          />
        </Grid>
        <Grid xs={8}>
          <TextField
            name="qtde"
            label="Quantidade"
            fullWidth
            value={form.values.qtde}
            onChange={form.handleChange}
          />
          <TextField
            name="cost"
            label="Custo"
            fullWidth
            value={form.values.cost}
            onChange={form.handleChange}
          />
          <TextField
            name="desc"
            label="Descrição"
            fullWidth
            value={form.values.desc}
            onChange={form.handleChange}
          />
        </Grid>
      </div>
      <Button  
      onClick={() => {form.handleSubmit()}} 
      style={{ borderRadius: "25px", boxShadow:"0px 2px 4px 0px #00000040", width: "250px", background:"#5B7434", color: "-#000"}}>
        Salvar
      </Button>
      {stock && (
        <Button
          onClick={handleDelete}
          style={{
            borderRadius: "25px",
            boxShadow: "0px 2px 4px 0px #00000040",
            width: "250px",
            background: "#D32F2F",
            color: "#FFF",
            marginTop: "10px"
          }}
        >
          Excluir
        </Button>
      )}
    </ModalDefault>
  );
}
