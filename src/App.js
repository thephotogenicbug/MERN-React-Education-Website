import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/blog/:slug" component={Blog} />
    </BrowserRouter>
  );
}

export default App;
