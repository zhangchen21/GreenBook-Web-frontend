import Navbar from './Components/Nav/Nav';
import HomePage from "./Home/HomePage";
import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import './App.scss';

function App() {
  const [width, setWidth] = useState('100vw');

  // 监听窗口宽度变化，自动调整列数
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth > 1700 ? '1700px' : '100vw');
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); 

  return (
    <div 
      className="App"
      style={{width: width}}
    >
      <div className="nav" style={{width: width}}>
        <Navbar />
      </div>
      <div className="OutLet">
        <Outlet />
      </div>
    </div>
  )
}

export default App;
