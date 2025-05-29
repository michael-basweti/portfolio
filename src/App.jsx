import React, { useEffect } from "react";
import "./App.css";
import RouteComponent from "./RouteComponent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import AOS from "aos";

function App() {
  // const [count, setCount] = useState(0)
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (ms)
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <>
      <div className="">
        <RouteComponent />
      </div>
    </>
  );
}

export default App;
