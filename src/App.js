import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import ContactUs from "./Pages/ContactUs.js";
import About from "./Pages/About";
import JainUniversity from "./Pages/JainUniversity";
import AnnamalaiUniversity from "./Pages/AnnamalaiUniversity";
import SinghaniaUniversity from "./Pages/SinghaniaUniversity";
import FeesData from "./Pages/FeesData";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/blog/:slug" component={Blog} />
      <Route exact path="/jainuniversity" component={JainUniversity} />
      <Route exact path='/annamalaiuniversity' component={AnnamalaiUniversity} />
      <Route exact path='/singhaniaUniversity' component={SinghaniaUniversity} />
      <Route exact path='/fees/:id' component ={FeesData} />
      <Route exact path="/contactus" component={ContactUs} />
      <Route exact path="/about" component={About} />
    </BrowserRouter>
  );
}

export default App;
