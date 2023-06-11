import React, { useState } from 'react';
import { Button, TextField } from "@mui/material";
import DynamicInputs from './components/DynamicInputs';
import './createOrder.css'
import IOrderType from './types/OrderType';
import genHex from '../../utils/genRanHex';
import PizzasOrderType from './types/PizzasOrderType';

interface props {
  order?: IOrderType
  saveOrderData: (order: IOrderType) => void;
  removeOrderData: (orderId: string) => void;
  setBack: () => void;
}

export default function CreateOrder({ setBack,saveOrderData, order, removeOrderData }: props) {
  const [clientName, setClientName] = useState('');
  const [discount, setDiscount] = useState('');
  const [address, setAddress] = useState('');
  const [orderList, setOrderList] = useState<PizzasOrderType[]>([]);

  const handleChange = (e: any) => {
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

  const handleOrderChange = (updatedOrder: PizzasOrderType) => {
    setOrderList(p => [...p,updatedOrder]);
  };

  const handleSave = () => {
    const orderData: IOrderType = {
      id: genHex(5),
      name: clientName,
      discount: parseInt(discount),
      address: address,
      pizzas: orderList
    };

    saveOrderData(orderData);
    setBack()
  };

  return (
    <div className="order-container">
      <form id="order-form">
        <TextField
          className='order-element'
          sx={{
            width: '65%',
            marginRight: '15px',
            marginBottom: '20px',
          }}
          type='text'
          id='clientNameId'
          label='Cliente'
          name='clientName'
          value={clientName}
          onChange={handleChange}
        />
        <TextField
          className='order-element'
          sx={{
            width: '30%',
            marginLeft: '15px',
            marginBottom: '20px',
          }}
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
          sx={{
            width: '100%',
            heigth: '300px',
            marginBottom: '20px',
          }}
          type='textArea'
          id='addressId'
          label='Endereço'
          name='address'
          value={address}
          onChange={handleChange}
        />
        <div className="buttons">
          <Button onClick={handleSave}
            className='order-element'
            sx={{
              marginRight: '15px',
            }}
            id='saveBtn'>Salvar</Button>
          <Button
            className='order-element'
            disabled={!order}
            sx={{
              marginLeft: '15px',
            }}
            id='deleteBtn' onClick={() => {
              removeOrderData(order!.id)
              setBack()
            }}>Excluir</Button>
        </div>
      </form>
    </div >
  );
}