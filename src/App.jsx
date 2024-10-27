import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Root from "./layouts/Root";
import Home from './pages/Home';
import ErrorPage from './pages/Error';
import About from './pages/About';
import Contact from "./pages/Contact";

import { initializeApp } from "firebase/app";
import { getFunctions } from "firebase/functions";
import Services from "./pages/services";

// Firebase cloud functions init
const firebaseConfig = {
    apiKey: "AIzaSyDAGIMExrOtrcow7XBiLgCLiCm23vmFcfA",
    authDomain: "arboml-form.firebaseapp.com",
    projectId: "arboml-form",
    storageBucket: "arboml-form.appspot.com",
    messagingSenderId: "608132718696",
    appId: "1:608132718696:web:3611463d452696a556dbdd"
  };

   //initialize a Firebase instance
  const app = initializeApp(firebaseConfig);

  //initialize Cloud Functions through Firebase
  const functions = getFunctions(app);

const router  = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root></Root>}>
      <Route index element={<Home></Home>}></Route>
      <Route path="contactez-nous" element={<Contact></Contact>}></Route>
      <Route path="a-propos" element={<About></About>}></Route>
      <Route path="services" element={<Services></Services>}></Route>
      <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
