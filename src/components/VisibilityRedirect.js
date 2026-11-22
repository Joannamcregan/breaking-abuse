import React, { useEffect, useContext } from "react";
import { redirect } from "react-router-dom";
import DispatchContext from "../DispatchContext";
import StateContext from "../StateContext";

function VisibilityRedirect(props) {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  function redirect(destination) {
    appDispatch({ type: "redirect" });
  }

  useEffect(() => {
    let appDestination = appState.redirectSelection;
    let idleTimer;
    const gtfo = () => {
      if (document.visibilityState !== "visible"){
        clearTimeout(idleTimer);
        idleTimer = setTimeout(()=>{
          redirect(appDestination);
          localStorage.removeItem("selectedStyle");
        }, 10000);
      }
    }
    document.addEventListener("visibilitychange", gtfo);
    return () => {
      document.removeEventListener(
        "visibilitychange",
        gtfo
      );
    };
  }, []);
  return <></>;
}

export default VisibilityRedirect;
