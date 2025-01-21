import React from 'react'
import "./App.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {LoginPage,SignupPage,Home,CreateProduct,MyProducts,Cart,ProductDetails,Profile,CreateAddress,SelectAddress,OrderConfirmation,MyOrdersPage} from "./routes/routes.js";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<CreateProduct/>}/>
        <Route path='/myproducts' element={<MyProducts/>}/>
        <Route path="/create-product/:id" element={<CreateProduct />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/create-address' element={<CreateAddress/>}/>
        <Route path='/select-address' element={<SelectAddress/>}/>
        <Route path='/order-confirmation' element={<OrderConfirmation/>}/>
        <Route path='/myorders' element={<MyOrdersPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
