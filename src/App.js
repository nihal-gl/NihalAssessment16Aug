import {BrowserRouter as Router} from "react-router-dom";
import {Routes, Route} from 'react-router-dom';
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";
import Booklist from "./Components/Booklist";
import productDetails from './Components/edata'
function App() {
  return (
    <div class="container">
    <div>
      <Router>
      <Routes>
      <Route path = '/' element = {<Home/>}></Route>
      <Route path = '/dashboard' element = {<Dashboard/>}></Route>
      <Route path = '/booklist' element = {<Booklist data={productDetails}/>}></Route>
    </Routes>
    </Router>
    </div>
    </div>
  );
}

export default App;
