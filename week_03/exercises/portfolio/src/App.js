import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import{Home, About, Projects} from "./pages";
import { ROUTES } from "./routes/routes";


import './App.css';
const router=createBrowserRouter(
    createRoutesFromElements(
        <Route path={ROUTES.home.path} element={<Home/>} />,
        <Route path={ROUTES.about.path} element={<About/>} />,
        <Route path={ROUTES.projects.path} element={<Projects/>} />
    )

);

function App() {
  return (
    <RouterProvider router={router}/>
      
      
    
  );
}

export default App;
