import React, { useState, useReducer } from "react";
import './App.css';
import ReactDOM from "react-dom/client";
import { useImmerReducer } from "use-immer";
import Header from "./components/Header";
import Overlay from "./components/Overlay";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Risk from "./components/Risk";
import QuickExit from "./components/QuickExit";
import VisibilityRedirect from "./components/VisibilityRedirect";
import MotionRedirect from "./components/MotionRedirect";
import StateContext from "./StateContext";
import DispatchContext from "./DispatchContext";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  const initialState = {
    redirectSelection: localStorage.getItem("selectedStyle")
      ? localStorage.getItem("selectedStyle")
      : "cnn",
    hasSelection: localStorage.getItem("selectedStyle")
  };

  function theReducer(draft, action) {
    switch (action.type) {
      case "setRedirectSelection":
        draft.redirectSelection = action.value;
        localStorage.setItem("selectedStyle", action.value);
        break;
      case "redirect":
        let destination = "https://" + draft.redirectSelection + ".com";
        document.getElementById('blank-overlay').classList.remove('hidden');
        window.open(destination, '_blank');
        window.location.replace(destination);
        // console.log(
        //   `totally going to redirect to ${destination} once testing is complete`
        // );
        break;
    }
  }

  const [state, dispatch] = useImmerReducer(theReducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <HashRouter>
          <VisibilityRedirect />
          <MotionRedirect />
          <Header />
          <Overlay />
          <QuickExit redirectSelection={state.redirectSelection} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/risk" element={<Risk />} />
          </Routes>
          <Footer />
        </HashRouter>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
