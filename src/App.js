import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Home from "./components/Home";
function App() {
  return (
    <div className="app--container">
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/"  element={<Home />}></Route>
          <Route path="/category/:category" element={<ItemListContainer />}></Route>
          <Route path="/item/:itemId" element={<ItemDetailContainer />}></Route>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;