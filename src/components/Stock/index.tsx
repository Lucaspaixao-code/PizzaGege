import { useState } from 'react'
import "./style.css"

const Stock = () => {
  const [items, setItems] = useState([
    { sabor: 'queijo', Desc:"Massa fina, molho de tomate virgens, queijo mozzarella, calabresa italiana e orégano", data:"01/06/2022", quantidade: 3, valor: 10.99 },
    { sabor: 'margerita', Desc:"BLablabla", data:"01/06/2022", quantidade: 5, valor: 7.50 },
    { sabor: 'margerita', Desc:"BLablabla", data:"01/06/2022", quantidade: 5, valor: 7.50 }
  ]);

  return (
    <div className='Base'>
      {items.map((item, index) => (
        <div className="Registro" key={index}>
            <div className='ObjEsq'>
                <p className='Nome'>Pizza de <span>{item.sabor}</span> [{item.data}]</p>
                <p className='Desc'>{item.Desc}</p>
            </div>
            <div className='ObjDir'>
                <p className='Qtde'> {item.quantidade}</p>
                <p className='Valor'>R${item.valor}</p>
            </div>
        </div>
      ))}
    </div>
  );
};

export default Stock;
