import './App.css';
import Home from './home';
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import Login from './login';
import Dashboard from './Dashboard';
import students from './Data';
import SignUp from './Signup';
import Product from './Product';
function App() {
  return (
    <div className="App">
      <h1><b>BLA BLA SHOPPING</b></h1> {/*Shopping Title */}
      <BrowserRouter>{/*Links Started*/}
      <Routes>
        <Route path='/' element={<h1>This is Main Page</h1>}/>
        <Route path='/Home' element={<Home></Home>}/>
        <Route path='/Login' element={<Login></Login>}/>
        <Route path='/Signup' element={<SignUp></SignUp>}/>
        <Route path='/Product' element={<Product></Product>}/>
        <Route path='/Dashboard' element={<Dashboard data={students}></Dashboard>}/>
        <Route path='/*' element={<Navigate to="/Home"></Navigate>}/>
        {/* <Route path='/user/:name' element={<User></User>}/> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
