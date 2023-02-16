import React from 'react'
import '../App.css';

function Product({product, basket, setBasket}) {
    // const addBasket = () => {
    //     console.log("sepete eklendi.")
    //     setBasket([...basket,product])
    // }
    const basketItem = basket.find(item => item.id === product.id)

    const addBasket = () => {
        const checkBasket = basket.find(item => item.id === product.id)
    
        if(checkBasket){
                checkBasket.amount += 1
                setBasket([...basket.filter(item => item.id !== product.id),checkBasket])
        }else{
            setBasket([...basket,{
                id: product.id,
                amount:1
            }])
        }
    }

    const removeBasket = () => {
        const currentBasket = basket.find(item => item.id === product.id)
        const basketWithoutCurrent = basket.filter(item => item.id !== product.id)
        currentBasket.amount -= 1
        if(currentBasket.amount === 0){
            setBasket([...basketWithoutCurrent])
        }else{
            setBasket([...basketWithoutCurrent,currentBasket])
        }
    }

  return (
    <div className='product'>
        <img src={product.image} alt=""/>
       <h6> {product.title}</h6>
       <div className='price'>{product.price} ₺ <span>+ KDV</span> </div>
       <div className='actions'>
        <button classsName='sell-btn' disabled={!basketItem} onClick={removeBasket}>Sepetten Kaldır</button>
        <span className='amount'>{basketItem && basketItem.amount || 0}</span>
        <button classsName='buy-btn' onClick={addBasket}>Sepete Ekle</button>
       </div>
       <style jsx>{`
       .product {
        padding:10px;
        background: #fff;
        border: 1px solid #ddd;
        margin-bottom: 10px;
        width: 24%;     
      }
      .product img {
        width:100%;
        height: 200px;
      }
      .product h6{
        pt: 3px;
        //font-size: 20px;
        font-weight: bold;
        margin-bottom: 10px;
          }
      .product .price {
        font-size: 20px;
        color: #179b17;
        padding: 3px;
        margin-top: 5px;
        align-self: center;
      }
      .product .price span{
        font-size: 15px;
        color: #179b17;
        padding: 3px;
        margin-top: 0px;
        margin-bottom: 5px;
        align-self: center;
      }
      
      .actions {
        display: flex;
        align-items:center;
        justify-content: space-between;
        margin-top: 10px;
        
      }
     .product .actions {
        display: flex;
        align-items:center;
     }
     .actions button {
        height: 50px;
        padding: 0 15px;
        flex: 1;
        cursor: pointer;
        background-color: lightgray;
        font-size: 14px;
        border-radius:4px 4px 4px 4px;
        margin-bottom: 0;
        //justify-content: space-between;
     }
     .actions button[disabled] + .amount{
        opacity: .0;
        //cursor: not-allowed;
     }
     .actions button[disabled] {
        opacity: .0;
        //cursor: not-allowed;
     }
     .actions .amount {
        width: 50px;
        text-align: center;
        border: 1px solid #ddd;
        height:50px;
        display:flex;
        align-items:center;
        font-size:15px;
        justify-content: center;
        margin-bottom: 0;

     }
     
       `}

       </style>
    </div>
  )
}

export default Product