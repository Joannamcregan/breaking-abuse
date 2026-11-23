import React, { useEffect, useContext } from "react";
import DispatchContext from "../DispatchContext";
import StateContext from "../StateContext";

function MotionRedirect(onExit) {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  function redirect() {
    // appDispatch({ type: "redirect" });
    window.location.replace('google.com');
  }

  useEffect(() => {
    let appDestination = appState.redirectSelection;
    window.addEventListener("devicemotion", (event) => {
      if (
        event.acceleration.x > 15 ||
        event.acceleration.y > 15 ||
        event.acceleration.z > 15
      ) {
        window.location.replace('duckduckgo.com');
      } else {
        window.location.replay('bing.com');
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
