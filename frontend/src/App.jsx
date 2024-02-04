import React from 'react'
// import './App.css'
import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Notfound from './components/Notfound'
import ListRestaurants from './components/ListRestaurants'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SnackbarProvider } from 'notistack'
import BookRestro from './components/BookRestro'
import ManageOrders from './components/ManageOrders'





const App = () => {
  return (
    <div>
      <BrowserRouter>
        <SnackbarProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/listRestaurants' element={<ListRestaurants />} />
            <Route path='/bookrestaurant/:index' element={<BookRestro />} />
            <Route path='/manageorder' element={<ManageOrders />} />
           
            {/* <Route path='/aboutus' element={<Aboutus />} /> */}
            <Route path='*' element={<Notfound />} />
          </Routes>
        </SnackbarProvider>
      </BrowserRouter>

    </div>

  )
}

export default App;