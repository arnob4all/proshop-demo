import React from 'react';
import 
{createBrowserRouter,createRoutesFromElements,
  RouterProvider,Route}
   from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeScreen from './screens/HomeScreen';

const router=createBrowserRouter(createRoutesFromElements(
<Route path='/' element={<App/>}>
<Route index={true} path='/' element={<HomeScreen/>}/>
</Route>))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

reportWebVitals();
