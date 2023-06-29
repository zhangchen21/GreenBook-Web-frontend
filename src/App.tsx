import Navbar from './Components/Nav/Nav';
import HomePage from "./Home/HomePage";
import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import './App.scss';
import { useAppDispatch, useAppSelector } from './hooks';
import { changeLayoutStatus, selectLayoutStatus } from './AppSlice';
import { debounce } from './Shared';

export const minTrendsWidth = 202;
export const maxTrendsWidth = 297;
const sidebarWidth = 267;
const layoutStatusMirror = () => {
  let windowWidth = window.innerWidth;
  // 5 列 trends + （1 列 sidebar + 16px的sidebar左外边距） + 32px的gap 
  if(windowWidth > 1725) return 0;
  // 5 列 trends + （1 列 sidebar + 16px的sidebar左外边距） + 32px的gap 
  if(windowWidth > 1425) return 1;
  // 5 列 trends + （1 列 sidebar + 16px的sidebar左外边距） + 32px的gap 
  if(windowWidth > 1192) return 2;
  // 5 列 trends + （1 列 sidebar + 16px的sidebar左外边距） + 32px的gap 
  if(windowWidth > 960) return 3;
  // 5 列 trends + （1 列 sidebar + 16px的sidebar左外边距） + 32px的gap 
  if(windowWidth > 692) return 4;
  return 5;
}

function App() {
  const layoutStatus = useAppSelector(selectLayoutStatus);
  const dispatch = useAppDispatch();

  // 监听窗口宽度变化，自动调整列数
  useEffect(() => {
    // 防抖
    const handleResize = debounce(() => {
      console.log(window.innerWidth)
      // Handle App width
      window.innerWidth > 1725 ? dispatch(changeAppWidth('1700px')) : dispatch(changeAppWidth('100vw'));

      // Handle nav
      window.innerWidth > 1400 ? dispatch(changeShowNavItem(true)) : dispatch(changeShowNavItem(false));

      // Handle side bar
      window.innerWidth > 960 ? dispatch(changeShowSideBar(true)) : (
        dispatch(changeShowSideBar(false)) && dispatch(changeShowSideBar(false))
      );

      // Handle trend's column
      const trendsWidth = window.innerWidth - (showNavItem ? sidebarWidth : 0);
      let count = Math.max(
        Math.floor(trendsWidth / minTrendsWidth), // 每列最小宽度为202px
        Math.floor(trendsWidth / maxTrendsWidth),
      )
      if (count < 2) count = 2; // 最少显示2列
      if (count > 5) {
        count = 5;
      }
      // 设置列数
      dispatch(changeTrendColumn(count));
    }, 100);

    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); 

  return (
    <div 
      className="App"
      style={{width: appWidth}}
    >
      <div className="nav" style={{width: appWidth}}>
        <Navbar />
      </div>
      <div className="OutLet">
        <Outlet />
      </div>
    </div>
  )
}

export default App;
