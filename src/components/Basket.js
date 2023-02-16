import React from 'react'
import BasketItem from './BasketItem'
import { Link } from "react-router-dom";
import { round } from 'mathjs';

function Basket({basket,ampuller,total,resetBasket}) {
  return (
    <>
    <div className='basket-container box'>
      <h3>SEPETİM</h3>
      <ul>
        {basket.map(item => (
            // <div>{item.id}</div>
            <BasketItem key={item.id} item = {item} product={ampuller.find(p => p.id === item.id)}/>        ))
    }
   {/* <div style={{ display: 'flex', alignItems: 'flex-start' }}>
  <div>KDV: % 18</div>
  <div style={{ marginLeft: 'auto' }} className='kdv'>{round((total*0.18),2)} ₺</div>
  </div> */}


    </ul>
  
    <div className='total'>
    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
    <div>Toplam:</div>
    <div style={{ marginLeft: 'auto' }} className='kdv'>{total}  ₺</div>
    </div> 
    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
    <div>KDV (%18):</div>
    <div style={{ marginLeft: 'auto' }} className='kdv'>{round((total*0.18),2)} ₺</div>
    </div> 
    <br></br>
      KDV Dahil Toplam: &nbsp; {total+round((total*0.18),2)}  ₺
    </div>
    <br></br>
    <button className='basket-reset-btn' onClick={resetBasket}>Sepeti Sıfırla</button>
   
    <Link to='/BasketPage'>
    <button className='basket-approve-btn'>Sepeti Onayla</button></Link>
    
    </div>
   
    <style jsx>{`

   .basket-container {
    padding: 20px;
    background: #fff;
    border: 1px solid #ddd;
   } 
   .basket-container h3 {
    font-size:20px;
    margin-bottom: 15px;
    font-weight: bold;
   }
   .basket-container .total {
    border-top: 1px solid #ddd; 
    padding-top: 10px;
    margin-top: 10px;
    font-size: 18px;
    font-weight:bold;
    text-align: right;
    color: #179b17;
   }
   .basket-reset-btn {
    background: lightgray;
    height: 40px;
    padding: 0 20px;
    font-size: 16px;
    cursor:pointer;
   }
   .basket-approve-btn {
    background: #179b17;
    color: #fff;
    height: 40px;
    padding: 0 20px;
    font-size: 16px;
    cursor:pointer;
    float: right;
   }
     
       `}

    </style>
    </>
  )
}
 
export default Basket