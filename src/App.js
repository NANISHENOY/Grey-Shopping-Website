
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';


import  {Shop} from './Pages/Shop';
import  Shopcat from './Pages/Shopcat';
import  {Product}  from './Pages/Product';
import  {Cart  }from './Pages/Cart';
import  {Login } from './Pages/Login';
import mens from './Components/Assest/Ecommerce_Frontend_Assets/Assets/banner_mens.png'
import womens from './Components/Assest/Ecommerce_Frontend_Assets/Assets/banner_women.png'
import kids from './Components/Assest/Ecommerce_Frontend_Assets/Assets/banner_kids.png'
import AdminPage from './Pages/AdminPage';





function App() {
  return (<>
  <BrowserRouter>
    <Navbar/>
  <Routes>
  
    <Route path='/' element={<Shop/>}/>
    <Route path='/mens' element={<Shopcat banner={mens} category="men"/> }/>
    <Route path='/womens' element={<Shopcat banner={womens} category="women"/>}/>
    <Route path='/kids' element={<Shopcat banner={kids} category="kid"/>}/>
    <Route path="/product" element={<Product/>}>
    <Route path=':productId' element={<Product/>}/>
    </Route>
   <Route path='/cart' element={<Cart/>}/>
   <Route path='/login' element={<Login/>}/>
   <Route path='/admin' element={<AdminPage/>}/>
  
   
    </Routes>
  
    </BrowserRouter>
 
  </>);
}

export default App;
