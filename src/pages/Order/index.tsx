import React, { useState } from 'react';
import { Button } from "@mui/material";
import './index.css';
import CreateOrder from './CreateOrder';
import useTitle from "../../core/components/Header/hook/useTitle";

interface props {
  title: string
}

export default function Order({ title }: props) {

  const { defineTitle } = useTitle()
  defineTitle(title)
  const [showCreateOrder, setShowCreateOrder] = useState(false);

  const handleClick = () => {
    setShowCreateOrder(true);
  };

  return <>
    <div className="container">
      {!showCreateOrder && (
        <Button onClick={handleClick} class="add-item">+</Button>
      )}
      {showCreateOrder &&
        (<div className="overlay">
          <CreateOrder />
        </div>)}
    </div>
  </>


}