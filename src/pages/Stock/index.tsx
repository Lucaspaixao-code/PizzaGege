import { useState } from 'react';
import { Button, Grid } from "@mui/material";
import useTitle from "../../core/components/Header/hook/useTitle";
import Stocker from './components/Stock';
import StockMock from './mock/Stock';
import CreateStockModal from './components/index';

export default function Stock() {
  const [showCreateOrder, setShowCreateOrder] = useState(false);
  const { defineTitle } = useTitle();
  defineTitle("Estoque");

  const handleClick = () => {
    setShowCreateOrder(true);
  };

  const handleBack = () => {
    setShowCreateOrder(false);
  };

  return (
    <>
      <Grid container xs={12} sx={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "5rem",
        flexDirection: "row"
      }}>
        <Grid item xs={9} sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Button variant='contained' disableElevation onClick={handleClick}><b>+</b></Button>
        </Grid>
        <Stocker stocks={StockMock} />
      </Grid>
      <CreateStockModal open={showCreateOrder} stock={null} close={handleBack} />
    </>
  )
}