import './index.css'
import Header from './Components/Header'
import Home from '../src/Routes/Home'
import LogIn from './Routes/LogIn'
import CreateAcc from './Routes/CreateAcc'
import Footer from './Components/Footer'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Product from './Routes/Product'
import Booking from './Routes/Booking'
import SuccessfulBookingRoute from './Routes/SuccessfulBookingRoute'
import AddProduct from './Routes/AddProduct'
import SuccessfulProductRoute from './Routes/SuccessfulProductRoute'
import UserBooking from './Routes/UserBooking'
import EmptyBooking from './Components/EmptyBooking'

function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/login' element={<LogIn/>}/>
          <Route path='/createacc' element={<CreateAcc/>}/>
          <Route path='/product/:id' element={<Product/>}/>
          {/* <Route path='/product/:id/booking' element={<Booking/>}/> */}
          <Route path='/product/:id/booking' element={<Booking/>}/>
          <Route path='/successfulBooking' element={<SuccessfulBookingRoute/>}/>
          <Route path='/administration' element={<AddProduct/>}/>
          <Route path='/successfulProduct' element={<SuccessfulProductRoute/>}/>
          <Route path='/userbooking/:id' element={<UserBooking/>}/>
          <Route path='/emptybooking' element={<EmptyBooking/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
