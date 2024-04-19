import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Root from "./layouts/Root";
import Home from './pages/Home';
import ErrorPage from './pages/Error';
import About from './pages/About';
import Contact from "./pages/Contact";
import Felling from "./pages/Felling";
import Shredding from "./pages/Shredding";
import Pruning from "./pages/Pruning";
import Realisations from "./pages/Realisations";

const router  = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root></Root>}>
      <Route index element={<Home></Home>}></Route>
      <Route path="acceuil" element={<Home></Home>}></Route>
      <Route path="nos-réalisations" element={<Realisations></Realisations>}></Route>
      <Route path="contactez-nous" element={<Contact></Contact>}></Route>
      <Route path="a-propos" element={<About></About>}></Route>
      <Route path="services">
        <Route path="abattage" element={<Felling></Felling>}></Route>
        <Route path="déchiquetage" element={<Shredding></Shredding>}></Route>
        <Route path="élagage" element={<Pruning></Pruning>}></Route>
      </Route>
      <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
