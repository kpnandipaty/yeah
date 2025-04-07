import './App.css';
import { ReactDOM } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Container from './Layouts/Container';
import HomePage from './Layouts/HomePage';
import SecondPage from './Layouts/SecondPage';
import FourOhFour from './Layouts/FourOhFour';
import Categories from './Layouts/category';
import Navbar from './Layouts/navbar';
import CategoryIndividual from './Layouts/categoryindividual';
import Orders from './Layouts/orders';
import OrderSingle from './Layouts/statusindividual';

// WHEN creating routes, make sure to place them 
// BEFORE the FourOhFour page
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Container />} >
            <Route index element={<HomePage />} />
            <Route path="/category" element={<Categories/>} />
            <Route path="/category/:id" element={<CategoryIndividual/>} />
            <Route path="/orders" element={<Orders/>} />
            <Route path="/status/:id" element={<OrderSingle/>}/>
            <Route path="secondpage" element={<SecondPage />}/>
            <Route path="*" element={<FourOhFour />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
