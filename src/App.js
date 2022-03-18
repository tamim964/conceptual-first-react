// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './Component/Menubar/Menubar';
import Products from './Component/Products/Products';
import AOS from "aos";
import "aos/dist/aos.css";

// import Test from './Component/Test/Test';

function App() {
  const [count, setCount] = useState(0)
  const setCartCount = () => {
    setCount(count + 1)
  }
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <Menubar count={count}
      ></Menubar>
      <Products setCartCount={setCartCount}></Products>
    </div>
  );
}

export default App;
