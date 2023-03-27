import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Index from "./pages/index"
import Login from "./pages/login"
import Signup from "./pages/signup"
import Favorite from "./pages/favorite"
import Map from "./pages/map"

const router = createBrowserRouter ([
  {
    path: '/',
    element: <Index />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/favorite',
    element: <Favorite />
  },
  {
    path: '/map',
    element: <Map />
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
