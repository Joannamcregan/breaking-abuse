import { useEffect } from "react";

function MotionRedirect({onExit}) {

  useEffect(() => {
    const gtfo = (event) => {
      if (
        event.acceleration.x > 15 ||
        event.acceleration.y > 15 ||
        event.acceleration.z > 15
      ) {onExit(); } 
    }
    window.addEventListener("devicemotion", gtfo);
    return () => {
      document.removeEventListener(
        "devicemotion",
        gtfo
      );
    };
  }, [onExit]);
  return <></>;
}

export default MotionRedirect;
