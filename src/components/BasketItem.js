import React from 'react'
import { round } from 'mathjs';

function BasketItem({item,product}) {
  return (
    <>
    <li className='basket-item'>
  <div className='product-title'>{product.title}  &nbsp; &nbsp; ({product.price} ₺/ adet)  <span> x {item.amount} </span></div> 
  <span className='product-total'> {round((product.price * item.amount),2)} ₺</span>
  
</li>

<style jsx>{`
.basket-item {
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
  font-size: 17px;
}
.product-title span {
  color: #999;
}
`}</style>
     </>
  )
}

export default BasketItem


// import React from 'react'
// import '../App.css';

// function BasketItem({item, basket, setBasket}) {
//   const addBasket = () => {
//     const currentBasket = basket.find(product => product.id === item.id)
//     currentBasket.amount += 1
//     setBasket([...basket.filter(product => product.id !== item.id), currentBasket])
// }

// const removeBasket = () => {
//     const currentBasket = basket.find(product => product.id === item.id)
//     const basketWithoutCurrent = basket.filter(product => product.id !== item.id)
//     currentBasket.amount -= 1
//     if (currentBasket.amount === 0) {
//         setBasket([...basketWithoutCurrent])
//     } else {
//         setBasket([...basketWithoutCurrent, currentBasket])
//     }
// }
// return(
// <>
// <div className='product-title'>{product.title} ({product.price} ₺ / adet)  &nbsp;  <span> x {item.amount} </span></div> 
// <span className='product-total'> {product.price * item.amount} ₺</span>

// </div>
// <style jsx>{`
// .basket-item {
//   padding-bottom: 10px;
//   display: flex;
//   justify-content: space-between;
//   font-size: 17px;
// }
// .product-title span {
//   color: #999;
// }
// `}</style>
//      </>
// )
// }

// export default BasketItem

// import React from 'react'

// function BasketItem({item,product,basket,setBasket}) {
//   const addBasket = () => {
//         const currentBasket = basket.find(product => product.id === item.id)
//         currentBasket.amount += 1
//         setBasket([...basket.filter(product => product.id !== item.id), currentBasket])
//     }
    
//     const removeBasket = () => {
//         const currentBasket = basket.find(product => product.id === item.id)
//         const basketWithoutCurrent = basket.filter(product => product.id !== item.id)
//         currentBasket.amount -= 1
//         if (currentBasket.amount === 0) {
//             setBasket([...basketWithoutCurrent])
//         } else {
//             setBasket([...basketWithoutCurrent, currentBasket])
//         }
//   }
//   return (
//     <>
//     <li className='basket-item'>
//   <div className='product-title'>{product.title} ({product.price} ₺ / adet)  &nbsp; <button classsName='sell-btn' onClick={removeBasket}>-</button>  <span> x {item.amount} </span></div> <button classsName='buy-btn' onClick={addBasket}>+</button>
//   <span className='product-total'> {product.price * item.amount} ₺</span> 
// </li>

// <style jsx>{`
// .basket-item {
//   padding-bottom: 10px;
//   display: flex;
//   justify-content: space-between;
//   font-size: 17px;
// }
// .product-title span {
//   color: #999;
// }
// `}</style>
//      </>
//   )
// }

// export default BasketItem
