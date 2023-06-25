import { Stack, Typography } from "@mui/material";
import Stock from "./components/Stock";
import IStockType from "../../types/PizzaStockType";
import { useState } from "react";
import CreateStockModal from "../../components/index";

interface Props {
  stocks: IStockType[];
}

export default function Stocker({ stocks }: Props) {
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [showCreateOrder, setShowCreateOrder] = useState(false);

  const handleEdit = (index: number) => {
    setEditIndex(index);
    setShowCreateOrder(true);
  };

  const handleClose = () => {
    setEditIndex(null);
    setShowCreateOrder(false);
  };

  return (
    <Stack
      sx={{
        width: "75%",
        position: "absolute",
        transform: "translate(-50%, -50%)",
        top: "50%",
        left: "50%",
        padding: "15px",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.25)",
        borderRadius: "20px"
      }}
    >
      {stocks.length === 0 ? (
        <Typography variant="h6">Nenhuma pizza cadastrada</Typography>
      ) : (
        stocks.map((stock, index) => (
          <Stock stock={stock} key={stock.id} onEdit={() => handleEdit(index)} />
        ))
      )}
      {editIndex !== null && (
        <CreateStockModal open={showCreateOrder} stock={stocks[editIndex]} close={handleClose} />
      )}
    </Stack>
  );
}
