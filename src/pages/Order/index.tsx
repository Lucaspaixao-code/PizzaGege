import React, { useEffect, useState } from 'react';
import { Button, Grid } from "@mui/material";
import useTitle from "../../core/components/Header/hook/useTitle";
import Orders from './components/Orders';
import IOrderType from './types/OrderType';
import OrdersMock from './mock/orders';
import CreateOrderModal from './components/CreateOrderModal';

export default function OrderPage() {
  const [showCreateOrder, setShowCreateOrder] = useState(false);
  const [showOrders,setShowOrders] = useState<IOrderType[]>([]);
  const [updateOrders,setUpdateOrders] = useState(false);
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
    setUpdateOrders(true);
  }

  useEffect(()=>{
    if(updateOrders){
      setShowOrders(OrdersMock)
      setUpdateOrders(false);
    }
  },[updateOrders])

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
        <Orders orders={showOrders} />
      </Grid>
      <CreateOrderModal open={showCreateOrder}  close={handleBack} handleSave={handleSaveData}/>
    </>
  )
}