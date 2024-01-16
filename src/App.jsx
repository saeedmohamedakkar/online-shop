
import Error from './components/Error/Error';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Products from './components/Products/Products';
import { Routes,Route } from 'react-router-dom';
import Foter from './components/Foter/Foter';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import LogIn from './components/LogIn/LogIn';
import CreateAccount from './components/CreateAccount/CreateAccount';
import Profile from './components/Profile/Profile';
import EditeUser from './components/EditeUser/EditeUser';
import Dashboard from './components/Dashboard/Dashboard';
import ViewProduct from './components/ViewProduct/ViewProduct';
import Addproduct from './components/Addproduct/Addproduct';
import EditProduct from './components/EditProduct/EditProduct';

import ViewUser from "./components/ViewUser/ViewUser";




export default function App() {


let[isAdmin,setCheckAdmin] =useState(false) 

let [loading,setLoading] = useState(true)

let [products,setProducts] = useState([]) 
let [cartItem,setCartItem]= useState([])

let [users,setUsers]=useState([])
///////////////////////////////////////////////


useEffect(()=>{
  
  axios({method:"get",url:"http://localhost:5000/users"}).then((users=>setUsers(users.data)))
  
},[])

///////////////////////////////////////////////
  useEffect(()=>{
    setLoading(true)
    axios({method:"get",url:"http://localhost:5000/products"}).then((data=>setProducts(data.data)))
    setLoading(false)
  },[])


function addCart(items) {
  
 let check = cartItem.some((item)=>{
    return item.id ===items.id
  })
  if(check){
    items.number ++
  }
  else{
  items.number=1
  setCartItem([...cartItem,items])
 
  }
}
////////////////////////////////////////////////
function deletItems() {
  setCartItem([])

  Swal.fire({
    icon: 'success',
    title: 'Done',
    text: 'successfully deleted ...',
    
  })
}
////////////////////////////////////////////////



function increase(item) {

  item.number++
  setCartItem([...cartItem])
}
///////////////////////////////////////////////
function minus(item) {
if (item.number===1){return}

else{  item.number -= 1
  setCartItem([...cartItem])}

}
//////////////////////////////////////////////
function removeItem(id) {
 let newCartItem =  cartItem.filter((item)=>{ return item.id!== id})
 setCartItem([...newCartItem])
}
//////////////////////////////////////////////

  return (<>
 
  
  <Nav cartItem={cartItem}   isAdmin={isAdmin}/>

<Routes>

<Route path='/' element={<Home/>}/>
<Route path='cart' element={<Cart cartItem={cartItem} deletItems={deletItems} increase={increase} minus={minus} removeItem={removeItem} />}/>
<Route path='products' element={<Products products={products} loading={loading} addCart={addCart}/>}/>
<Route path='*' element={<Error/>}/>
<Route path='logIn' element={ localStorage.length===0 ?<LogIn users={users}/> :<Profile/>}/>
<Route path='/logIn/creatrAccount' element={<CreateAccount users={users}/>}/>
<Route path='profile' element={ <Profile/> }/>
<Route path="/editeUser/:userId" element={<EditeUser users={users} />}/>
<Route path="/dashboard"element={<Dashboard products={products}/>}/>
<Route path="/dashboard/viewProduct/:id" element={<ViewProduct/>}/>
<Route path="/dashboard/addproduct" element={<Addproduct/>}/>
<Route path="/dashboard/editProduct/:id" element={<EditProduct/>}/>
<Route path="/dashboard/viewUser/:id" element={<ViewUser/>}/>
</Routes>


< Foter/>

  </>
  )
}