import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Cart from './Components/Cart'
import RootLayout from './Components/RootLayout'

function App() {

  return (
   <BrowserRouter>
    <div className="container">
      <Routes>
        <Route path='/' element={<RootLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Route>
      </Routes>
    </div>
   </BrowserRouter>
  )
}

export default App
