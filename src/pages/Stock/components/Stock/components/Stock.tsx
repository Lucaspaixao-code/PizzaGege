import { Grid, Stack, Typography, Button } from "@mui/material";
import IStockType from "../../../types/PizzaStockType";

interface Props {
  stock: IStockType;
  id: string;
  onEdit: () => void;
}

export default function Stock({ stock, id, onEdit }: Props) {
  return (
    <Stack sx={{
      width: "100%",
      backgroundColor: "#eeeeee",
      border: "0.1px solid #ec9c9c",
      borderRadius: "5px",
      padding: "0.5rem",
    }}>
      <Stack
        sx={{
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexDirection: "row-reverse"
        }}
        key={id}
      >
        <Stack sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end"
        }}>
          <Typography color={"primary"}>{stock.qtde}</Typography>
          <Typography>R${stock.cost}</Typography>
        </Stack>
        <Stack sx={{
          width: "100%",
          height: "100%",
          display: "flex",
        }}>
          <Stack sx={{
            display: "flex",
            flexDirection: "row",
            gap: "3px"
          }}>
            <Typography variant="body1" color={"primary"}> Pizza de</Typography>
            <Typography variant="body1">{stock.name}</Typography>
            <Typography variant="body1">[{stock.expiration_date}]</Typography>
          </Stack>
          <Typography sx={{ fontSize: "12px" }} variant="body1">{stock.desc}</Typography>
        </Stack>
      </Stack>
      <Stack sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end"
      }}>
        <Button onClick={onEdit} variant="outlined">Editar</Button>
      </Stack>
    </Stack>
  );
}
