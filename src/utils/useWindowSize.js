import { useState, useEffect } from "react";


function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
    device: undefined
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {

      let newDevice;

      if (window.innerWidth <= 767) {
        newDevice = "mobile";
      } else if (window.innerWidth > 767 && window.innerWidth <= 1339) {
        newDevice = "tablet";
      } else {
        newDevice = "desktop";
      }

      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        device: newDevice
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export default useWindowSize