import { Grid, Stack, Typography, Button } from "@mui/material";
import IStockType from "../../../types/PizzaStockType";

interface Props {
  stock: IStockType;
  onEdit: () => void;
}

export default function Stock({ stock, onEdit }: Props) {
  return (
    <Stack
      sx={{
        width: "100%",
        height: "15%",
        borderBottom: "1px solid #BEBEBE",
        borderRadius: "5px",
        padding: "0.5rem"
      }}
    >
      <Grid container alignItems="center">
        <Grid item>
          <Typography
            sx={{
              marginLeft: "30px",
              fontWeight: "400",
              fontSize: "20px",
              lineHeight: "26px",
              letterSpacing: "3px"
            }}
          >
            Pizza de <span style={{ color: "#E93232" }}>{stock.name}</span>
          </Typography>
        </Grid>
        <Grid item>
          <Typography>[{stock.expiration_date}]</Typography>
        </Grid>
      </Grid>
      <Typography
        sx={{
          fontWeight: "400",
          fontSize: "12px",
          lineHeight: "16px",
          letterSpacing: "1px",
          marginLeft: "60px"
        }}
      >
        {stock.desc}
      </Typography>
      <Grid
        marginLeft="auto"
        alignSelf="center"
        sx={{ marginTop: "0.5rem" }}
      >
        <Grid item sx={{ marginLeft: "auto" }}>
          <Typography
            sx={{
              color: "#E93232",
              fontWeight: "400",
              fontSize: "20px",
              lineHeight: "26px",
              letterSpacing: "3px",
              width: "fit-content",
              padding: "2px 5px",
              marginTop: "30px"
            }}
          >
            {stock.qtde}
          </Typography>
        </Grid>
        <Grid item>
          <Typography>R${stock.cost}</Typography>
        </Grid>
      </Grid>
      <Button onClick={onEdit}>Editar</Button>
    </Stack>
  );
}
