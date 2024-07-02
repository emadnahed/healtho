import "./App.css";
import React, { useState } from "react";
import { Main } from "./data/Main";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import All from "./components/All";
import Home from "./components/Home";
import Layout from "./components/Layout";


function App() {
  const [main, setMain] = useState(Main);
  console.log(main);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/All" element={<All />} />                    
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
