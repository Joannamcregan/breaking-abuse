import React, { useEffect, useState, useContext } from "react";
import { redirect } from "react-router-dom";
import DispatchContext from "../DispatchContext";
import StateContext from "../StateContext";

function QuickExit({onExit}) {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  function redirect(destination) {
    appDispatch({ type: "redirect" });
  }

  let appDestination = appState.redirectSelection;

  return (
    <p
      id="exit"
      onClick={appDestination => {
        // redirect(appDestination);
        onExit();
      }}
    >
      Exit
    </p>
  );
}

export default QuickExit;
