import { useEffect } from "react";

function MotionRedirect({onExit}) {


  useEffect(() => {
    window.addEventListener("devicemotion", (event) => {
      if (
        event.acceleration.x > 15 ||
        event.acceleration.y > 15 ||
        event.acceleration.z > 15
      ) { onExit(); } 
    });
    return () => {
      document.removeEventListener(
        "devicemotion",
        onExit()
      );
    };
  }, []);
  return <></>;
}

export default MotionRedirect;
