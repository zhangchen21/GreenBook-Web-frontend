import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import HomePage from "./Home/HomePage";
import App from './App';
import "antd/dist/antd.css";
import Explore from './Explore/Explore';
import { store } from './store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="" element={<Navigate replace to="homepage" />} />
          <Route path="homepage" element={<HomePage />} />
          <Route path="zhihu" element={<Explore />} >  
            <Route
              path="*"
              element={<Explore />}
            />             
          </Route> 
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />      
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
