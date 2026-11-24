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
import { useNavigate } from "react-router-dom";

function App() {
  const initialState = {
    redirectSelection: "cnn"
  };

  function theReducer(state, action) {
    switch (action.type) {
      case "setRedirectSelection":
        return { ...state, redirectSelection: action.value };
      default:
        return state;
    }
  }

  const getTheFuckOut= () =>{
    document.getElementById('blank-overlay').classList.remove('hidden')
    let redirectSelection = state.redirectSelection !== null? state.redirectSelection : 'cnn';
    let extendedSelection = state.redirectSelection !== null? state.redirectSelection : 'google';
    // let redirectExtension;
    switch (redirectSelection){
      case 'aljazeera' :
        // redirectExtension = '/us-canada';
        extendedSelection += '/us-canada';
        break;
      case 'nbcnews' :
        // redirectExtension = '/us-news';
        extendedSelection += 'us-news';
        break;
      default:
        // redirectExtension = '/us';
        extendedSelection += '/us';
    }
    let destination = 'Https://' + redirectSelection + '.com';
    window.open(extendedSelection, '_blank');
    window.location.replace(destination);
  }

  const [state, dispatch] = useImmerReducer(theReducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <HashRouter>
          <VisibilityRedirect onExit={getTheFuckOut} />
          <MotionRedirect onExit={getTheFuckOut} />
          <Header />
          <Overlay />
          <QuickExit onExit={getTheFuckOut} />
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
