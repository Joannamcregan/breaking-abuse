import { useEffect } from "react";

function VisibilityRedirect({onExit}) {
  useEffect(() => {
    let idleTimer;
    const gtfo = () => {
      if (document.visibilityState !== "visible"){
        clearTimeout(idleTimer);
        idleTimer = setTimeout(()=>{
          onExit();
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
  }, [onExit]);
  return <></>;
}

export default VisibilityRedirect;