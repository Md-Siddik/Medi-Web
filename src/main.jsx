import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Pages/Home/Home';
import Main from './Layout/Main/Main';
import Error from './Components/Error';
import Pharmacies from './Pages/Pharmacies/Pharmacies';
import PharmacyDetails from './Pages/Pharmacies/PharmacyDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        errorElement: <Error></Error>,
      },
      {
        path: "/pharmacies",
        element: <Pharmacies></Pharmacies>,
        errorElement: <Error></Error>,
      },
      {
        path: "/pharmacies/:id",
        element: <PharmacyDetails></PharmacyDetails>,
        errorElement: <Error></Error>,
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
