import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ampuller from "../components/ampuller.json";
import Product from '../components/Product';
import { useEffect, useState} from "react";
import Basket from '../components/Basket';
import { round } from 'mathjs';
// import { BrowserRouter, Route, Link } from 'react-router-dom';


function App() {

  //const [basket, setBasket] = useState([])
  const [basket, setBasket] = useState(JSON.parse(localStorage.getItem("basket")) || []);
  const[total, setTotal] = useState([])
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
    }, [basket]);

const resetBasket = () => {
  setBasket ([]);
}

//   useEffect(() => {
//    setTotal (basket.reduce((acc,item) => {
//       return acc + (item.amount * (ampuller.find(product => product.id === item.id).price))
//     },0))
//   console.log(total)
// },[basket]);

useEffect(() => {
    setTotal(
    basket.reduce((acc, item) => {
    return  round(acc + item.amount * ampuller.find(product => product.id === item.id).price, 2);
    }, 0)
    );
    }, [basket]);
    

  return (
  <>
  <div className='page-bg'>
  <Header/>
  <br></br>
  <br></br>
  {/* <input
  type="text"
  placeholder="Ürün adını ara..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/> */}

 {/* {ampuller
     .filter((product) =>
       product.name.toLowerCase().includes(search.toLowerCase())
    )
     .map((product) => (
       <Product
         key={product.id}
         basket={basket}
         setBasket={setBasket}
        product={product}
       />
     ))} */}

  <div className='box products'>
  {ampuller.map(product => (
    <Product key={product.id} basket={basket} setBasket={setBasket} product={product} />
  ))}
  {/* <button onClick={resetBasket}>Sepeti Sıfırla</button> */}
  </div>
  {/* {total > 0 && (<Basket ampuller={ampuller} resetBasket={resetBasket} total= {total} basket={basket}/>)}
   */}
  <br></br>

  <Footer/>
  
  </div>



  </>
  );
}

export default App;
