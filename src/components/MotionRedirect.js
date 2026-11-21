import React, { useEffect, useContext } from "react";
import { redirect } from "react-router-dom";
import DispatchContext from "../DispatchContext";
import StateContext from "../StateContext";

function MotionRedirect(props) {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  function redirect(destination) {
    appDispatch({ type: "redirect" });
  }

  useEffect(() => {
    let appDestination = appState.redirectSelection;
    window.addEventListener("devicemotion", (event) => {
      if (
        event.acceleration.x > 15 ||
        event.acceleration.y > 15 ||
        event.acceleration.z > 15
      ) {
        redirect(appDestination);
        localStorage.removeItem("selectedStyle");
      } 
    });
    // return () => {
    //   document.removeEventListener(
    //     "devicemotion",
    //     redirect(redirectSelection)
    //   );
    // };
  }, []);
  return <></>;
}

export default MotionRedirect;
