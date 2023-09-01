import { Route, Routes} from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Admin from './pages/Admin';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Profile from './pages/Profile';
import Shop from './pages/Shop';
import SignUp from './pages/SignUp';
import SingleItem from './pages/SingleItem';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import BrandsDetails from './pages/BrandsDetails';
import { useEffect, useState } from 'react';

const App = () => {

  const [token, setToken] = useState("")

  useEffect( () => {
    const tkn = localStorage.getItem("logintoken")
    setToken(tkn)
  }, [])

  return (
    <section>
      <>
      <NavBar token = {token} setToken = {setToken} />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<AboutUs />}/>
          <Route path='/admin' element={<Admin />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/checkout' element={<Checkout />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/login' element={<LogIn setToken={setToken}/>}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='/shop' element={<Shop />}/>
          <Route path='/signup' element={<SignUp />}/>
          <Route path='/singleitem' element={<SingleItem />}/>
          <Route path='/brands' element={<BrandsDetails />}/>
        </Routes>
      <Footer /> 
      </> 
    </section>
  );
};

export default App;
