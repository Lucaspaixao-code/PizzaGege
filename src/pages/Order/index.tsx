import React, { useState } from 'react';
import { Button, Grid } from "@mui/material";
import './index.css';
import CreateOrder from './CreateOrder';
import useTitle from "../../core/components/Header/hook/useTitle";
import Orders from './components/Orders';
import IOrderType from './types/OrderType';
import OrdersMock from './mock/orders';

export default function OrderPage() {
  const [showCreateOrder, setShowCreateOrder] = useState(false);
  const [showCreateOrderEdit, setShowCreateOrderEdit] = useState(false);
  const { defineTitle } = useTitle()
  defineTitle("Lançamentos")

  const handleClick = () => {
    setShowCreateOrder(true);
  };

  const handleBack = () => {
    setShowCreateOrder(false);
  };

  function handleSaveData(order: IOrderType) {
    OrdersMock.push(order)
  }

  function handleRemoveData(orderId: string) {
    const indexOrdersMock = OrdersMock.findIndex((order) => order.id = orderId);
    OrdersMock.splice(indexOrdersMock, 1)
  }

  return (
    <>
      <Grid container xs={12} sx={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "5rem",
        flexDirection: "row"
      }}>
        <Orders orders={OrdersMock} />
        <Grid item xs={12} sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Button onClick={handleClick} variant='contained' class="add-item">+</Button>
        </Grid>
      </Grid>
      {showCreateOrder &&
        (<div className="overlay">
          <CreateOrder
            saveOrderData={handleSaveData}
            removeOrderData={handleRemoveData}
            setBack={handleBack} />
        </div>)}
    </>
  )
}