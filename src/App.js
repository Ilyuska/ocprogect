import React from "react";
import { Routes, Route } from "react-router-dom";

import { Layout } from "./components/Layout/Layout";
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import { Contacts } from "./components/Contacts/Contacts";
import { Menu } from "./components/Menu/Menu";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contacts />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
