import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer'
import Home from './Components/Home/Home';
import Login from './Components/Shared/Login/Login';
import Register from './Components/Shared/Login/Register/Register';
import NotFound from './Components/NotFound/NotFound';
import Blogs from './Components/Blogs/Blogs'
import Items from './Components/Inventory/Items';
import RequireAuth from './Components/Shared/Login/RequireAuth/RequireAuth';
import ItemDetail from './Components/Inventory/ItemDetail/ItemDetail';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/items' element={<Items></Items>}></Route>
        <Route path='/inventory/:id' element={<RequireAuth><ItemDetail></ItemDetail></RequireAuth>}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
