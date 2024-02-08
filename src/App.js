import logo from "./logo.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./component/Layout";
import Home from "./component/Home";
import About from "./component/About";
import Portfolio from "./component/Portfolio";
import Contact from "./component/Contact";
import Navbar from "./component/Navbar2";
import NotFound from "./component/NotFound";

function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <Layout></Layout>,
      children: [
        { index: true, element: <Home></Home> },
        { path: "about", element: <About></About> },
        { path: "portfolio", element: <Portfolio></Portfolio> },
        { path: "contact", element: <Contact></Contact> },
        // { path: "*", element: <NotFound></NotFound> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
