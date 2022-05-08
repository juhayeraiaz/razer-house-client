import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer'
import Home from './Components/Home/Home';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        {/* <Route path='/'></Route>
        <Route path='/'></Route> */}
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
