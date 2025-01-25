import React from 'react'
import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import {Loginpage} from "./routes/routes.js";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Loginpage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
