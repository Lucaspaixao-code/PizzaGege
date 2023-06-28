import { useState, useEffect } from 'react';
import { Button, Grid, TextField } from "@mui/material";
import ModalDefault from "../../../../components/Modal";
import { useFormik } from "formik";
import * as Yup from "yup";
import IStockType from "../../types/PizzaStockType";
import StockMock from "../../mock/Stock";

interface Props {
  open: boolean;
  close: () => void;
  stock: IStockType | null;
}

export default function CreateStockModal({ open, close, stock }: Props) {
  const [nextId, setNextId] = useState(0);

  useEffect(() => {
    setNextId(StockMock.length + 1);
  }, [open]);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Campo obrigatório"),
    expiration_date: Yup.string().required("Campo obrigatório"),
    qtde: Yup.number().required("Campo obrigatório"),
    cost: Yup.number().required("Campo obrigatório"),
    desc: Yup.string().required("Campo obrigatório"),
  });

  const form = useFormik<IStockType>({
    initialValues: stock
      ? { ...stock }
      : {
        id: String(nextId),
        name: "",
        expiration_date: "",
        qtde: "",
        cost: "",
        desc: ""
      },
    validationSchema,
    validateOnBlur: true,
    onSubmit: (values) => {
      if (stock) {
        const updatedStocks = StockMock.map((item) =>
          item.id === stock.id ? values : item
        );
        StockMock.length = 0;
        StockMock.push(...updatedStocks);
      } else {
        StockMock.push({ ...values, id: String(nextId) });
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
      <Grid item xs={12} container spacing={2}>
        <Grid item xs={14} style={{ display: "flex" }}>
          <Grid item xs={20}>
            <TextField
              name="name"
              label="Pizza"
              fullWidth
              value={form.values.name}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              error={form.touched.name && Boolean(form.errors.name)}
              helperText={form.touched.name && form.errors.name}
            />
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={4}>
            <Grid xs={10}>
              <TextField
                name="qtde"
                label="Quantidade"
                type="number"
                fullWidth
                value={form.values.qtde}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                error={form.touched.qtde && Boolean(form.errors.qtde)}
                helperText={form.touched.qtde && form.errors.qtde}
              />
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid item xs={12}>
              <TextField
                name="cost"
                label="Custo"
                fullWidth
                value={form.values.cost}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                error={form.touched.cost && Boolean(form.errors.cost)}
                helperText={form.touched.cost && form.errors.cost}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={14} style={{ display: "flex" }}>
          <Grid item xs={4}>
            <TextField
              name="expiration_date"
              type="date"
              label="Data de vencimento"
              InputLabelProps={{
                shrink: true,
              }}
              value={form.values.expiration_date}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              error={form.touched.expiration_date && Boolean(form.errors.expiration_date)}
              helperText={form.touched.expiration_date && form.errors.expiration_date}
            />
          </Grid>
          <Grid item xs={14}>
            <TextField
              name="desc"
              label="Descrição"
              fullWidth
              value={form.values.desc}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              error={form.touched.desc && Boolean(form.errors.desc)}
              helperText={form.touched.desc && form.errors.desc}
            />
          </Grid>
        </Grid>
        <Grid item xs={0}></Grid>
      </Grid>
      <Grid item xs={4} sx={{ display: "flex" }}>
        <Grid item xs={4}>
          <Button   onClick={() => { form.handleSubmit() }} variant="contained">Salvar</Button>
        </Grid>
        {stock && (
          <Button onClick={handleDelete} variant="contained">Excluir</Button>
        )}
      </Grid>
    </ModalDefault>
  );
}
