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
import Footer from "./Pages/Footer";
import ApplicationForm from "./Pages/ApplicationForm";
import PostJainOnline from "./Pages/PostJainOnline";
import PostJainDistance from "./Pages/PostJainDistance";
import JainDistanceData from "./Pages/JainDistanceData";
import JainOnlineData from "./Pages/JainOnlineData";
import Dashboard from "./Pages/Visitors/Dashboard";
import NewVisitor from "./Pages/Visitors/NewVisitor";
import Visitors from "./Pages/Visitors/Visitors";
import { useState } from "react";
import VisitorLogin from "./Pages/Visitors/VisitorLogin";
import SingleVisitor from "./Pages/Visitors/SingleVisitor";

function App() {

  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Route exact path="/" component={Home} />
      <Route exact path="/blog/:slug" component={Blog} />
      <Route exact path="/jainuniversity" component={JainUniversity} />
      <Route exact path='/annamalaiuniversity' component={AnnamalaiUniversity} />
      <Route exact path='/singhaniaUniversity' component={SinghaniaUniversity} />
      <Route exact path='/fees/:id' component ={FeesData} />
      <Route exact path='/fees/:id' component ={FeesData} />
      <Route exact path='/jaindistancefees/:id' component ={JainDistanceData} />
      <Route exact path='/jainonlinefees/:id' component ={JainOnlineData} />
      <Route exact path="/contactus" component={ContactUs} />
      <Route exact path="/about" component={About} />
      <Route exact path='/application' component={ApplicationForm} />
      <Route exact path="/postjainonline" component={PostJainOnline} />
      <Route exact path="/postjaindistance" component={PostJainDistance} />
      <Route exact path='/visitor/dashboard' component={Dashboard} />
      <Route exact path = '/visitor/newvisitor' component={NewVisitor} />
      <Route exact path="/visitor/allvisitor" component={Visitors} />
      <Route exact path = "/visitor/login" component={VisitorLogin} />
      <Route exact path="/visitor/allvisitor/:id" component={SingleVisitor} />
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
