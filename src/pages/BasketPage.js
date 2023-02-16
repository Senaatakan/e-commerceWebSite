import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ampuller from "../components/ampuller.json";
import Product from '../components/Product';
import { useEffect, useState} from "react";
import Basket from '../components/Basket';
import React from 'react'
import { round } from 'mathjs';
function BasketPage() {
    //const [basket, setBasket] = useState([])
    //const[total, setTotal] = useState([])
    const [basket, setBasket] = useState(JSON.parse(localStorage.getItem("basket")) || []);
    const [total, setTotal] = useState(0);


    useEffect(() => {
        localStorage.setItem("basket", JSON.stringify(basket));
        }, [basket]);
    
    useEffect(() => {
        setTotal(
        basket.reduce((acc, item) => {
        return round(acc + item.amount * ampuller.find(product => product.id === item.id).price, 2);
        }, 0)
        );
        }, [basket]);
        
        
        const resetBasket = () => {
        setBasket([]);
        };

     
  return (
    <>
       <div className='page-bg'>
  <Header/>
  <br></br>
  <br></br>


  {total > 0 && (<Basket ampuller={ampuller} resetBasket={resetBasket} total= {total} basket={basket}/>)}
  
  <br></br>

  <Footer/>
  
  </div>


 
    </>
  )
}

export default BasketPage