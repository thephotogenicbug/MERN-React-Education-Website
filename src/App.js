import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Universities from "./Pages/universities";
import ContactUs from "./Pages/ContactUs.js";
import About from "./Pages/About";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/blog/:slug" component={Blog} />
      <Route exact path="/universities/:slug" component={Universities} />
      <Route exact path="/contactus" component={ContactUs} />
      <Route exact path="/about" component={About} />
    </BrowserRouter>
  );
}

export default App;
