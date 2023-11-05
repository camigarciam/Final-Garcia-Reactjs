import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Home from "./components/Home";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import Checkout from "../src/components/Checkout/Checkout"

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCpEAX6gnAh4_DecRcFEPl_BPkMJz5KxZ0",
  authDomain: "react-js-final-ab838.firebaseapp.com",
  projectId: "react-js-final-ab838",
  storageBucket: "react-js-final-ab838.appspot.com",
  messagingSenderId: "513994410745",
  appId: "1:513994410745:web:2c38c1181060ddb74bb028"
};

const app = initializeApp(firebaseConfig);
export const db =getFirestore(app)

function App() {
  return (
    <div className="app--container">
      <BrowserRouter>
      <CartProvider>
        <NavBar></NavBar>
        <Routes>
          <Route path="/"  element={<Home />}></Route>
          <Route path="/category/:categoryId" element={<ItemListContainer />}></Route>
          <Route path="/item/:itemId" element={<ItemDetailContainer />}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/checkout" element={<Checkout/>}></Route>
          <Route path="*" element= {<h1>ERROR 404 NOT FOUND </h1>}></Route>
        </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;