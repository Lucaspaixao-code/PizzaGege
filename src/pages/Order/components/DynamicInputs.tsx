import React, { useState } from 'react';
import { Button, TextField } from "@mui/material";
import '../createOrder.css'

export default function DynamicInputs({ onOrderChange }) {
  const [order, setOrder] = useState([{ pizza: "", quantity: "" }]);

  const handleClick = () => {
    setOrder([...order, { pizza: "", quantity: "" }]);
  };

  const handleChange = (e, i) => {
    const { name, value } = e.target;
    const updatedOrder = [...order];

    if (name === "quantity" && value < 0) {
      return;
    }

    updatedOrder[i][name] = value;
    setOrder(updatedOrder);
    onOrderChange(updatedOrder);
  };

  const handleDelete = (index) => {
    const updatedOrder = [...order];
    updatedOrder.splice(index, 1);
    setOrder(updatedOrder);
    onOrderChange(updatedOrder); // Chamando a prop onOrderChange com a lista atualizada
  };

  return (
    <div>
      {order.map((flavor, index) => (
        <div key={index}>
          <TextField
            className="order-element"
            sx={{
              width: '55%',
              marginRight: '15px',
              marginBottom: '20px',
            }}
            type="text"
            id={`pizzaId-${index}`}
            label="Pizza"
            name="pizza"
            value={flavor.pizza}
            onChange={(e) => handleChange(e, index)}
          />

          <TextField
            className="order-element"
            sx={{
              width: '25%',
              marginLeft: '15px',
              marginRigth: '30px',
              marginBottom: '20px',
            }}
            type="number"
            id={`quantidadeId-${index}`}
            label="Qtd"
            name="quantity"
            value={flavor.quantity}
            onChange={(e) => handleChange(e, index)}
          />

          <Button onClick={() => handleDelete(index)}
            sx={{
              borderRadius: '25px',
              marginLeft: '30px',
              background: '#fff',
              marginTop: '9px',
            }}>-</Button>
        </div>
      ))
      }
      <Button onClick={handleClick}
        sx={{
          borderRadius: '25px',
          marginBottom: '20px',
          background: '#fff',
        }}>+</Button>
    </div >
  );
}