import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Popper from 'popper.js';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/Home';
import ProduitDetails from './components/produit/ProduitDetails';
import Login from './components/user/Login';
import Register from './components/user/Register';
import Profile from './components/user/Profile';
import ProtectedRoute from './components/route/ProtectedRoute';
import { loadUser } from './actions/userActions';
import store from './store';


function App() {

  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
      <div className="App">
    <Router>
        <Header />
        <div className='container container-fluid'> 
        <Routes>
            <Route path="/search/:keyword" element={<Home />} />
            <Route exact path="/" element={<Home />} />
            <Route exact path="/produit/:id" element={<ProduitDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
           <Route exact path="/me" element={
                <ProtectedRoute  exact path="/me" element={
                  <Profile /> }>
                </ProtectedRoute>
            }/>


        </Routes>
        </div>    
        <Footer />
    </Router>

      </div>
  );
}

export default App;
