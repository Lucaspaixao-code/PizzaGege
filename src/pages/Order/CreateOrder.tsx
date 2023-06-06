import React, { useState } from 'react';
import { Button, TextField } from "@mui/material";
import DynamicInputs from '../../core/components/Order/DynamicInputs';
import './createOrder.css'


export default function CreateOrder() {
  const [clientName, setClientName] = useState('');
  const [discount, setDiscount] = useState('');
  const [address, setAddress] = useState('');
  const [orderList, setOrderList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "discount" && value < 0) {
      return;
    }

    if (name === "clientName") {
      setClientName(value);
    } else if (name === "discount") {
      setDiscount(value);
    } else if (name === "address") {
      setAddress(value);
    }
  };

  const handleOrderChange = (updatedOrder) => {
    setOrderList(updatedOrder);
  };

  const handleSave = () => {
    const orderData = {
      clientName: clientName,
      discount: discount,
      address: address,
      orderList: orderList
    };

    saveOrderData(orderData);
  };

  return (
    <div class="order-container">
      <Button className="close-btn">x</Button>
      <form id="order-form">
        <TextField
          className='order-element'
          type='text'
          id='clientNameId'
          label='Cliente'
          name='clientName'
          value={clientName}
          onChange={handleChange}
        />
        <TextField
          className='order-element'
          type='number'
          id='discountId'
          label='Desconto %'
          name='discount'
          value={discount}
          onChange={handleChange}
        />
        <DynamicInputs onOrderChange={handleOrderChange} />
        <TextField
          className='order-element'
          type='text'
          id='addressId'
          label='Endereço'
          name='address'
          value={address}
          onChange={handleChange}
        />
        <Button onClick={handleSave}>Salvar</Button>
        <Button>Excluir</Button>
      </form>
    </div>
  );
}