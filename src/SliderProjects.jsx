import React, { useRef } from "react";
import Slider from "react-slick";
import CASE1 from "./assets/case1.jpg";
import CASE2 from "./assets/case2.jpg";
import CASE3 from "./assets/case3.jpg";
// import CASE4 from "./assets/case4.jpg";
// import CASE5 from "./assets/case5.jpg";
import CLAIM1 from "./assets/claim1.jpg";
import CLAIM2 from "./assets/claim2.jpg";
import CLAIM3 from "./assets/claim3.jpg";
import CLAIM4 from "./assets/claim4.jpg";
import CLAIM5 from "./assets/claim5.jpg";
import CLAIM6 from "./assets/claim6.jpg";
import CLAIM7 from "./assets/claim7.jpg";
import DMS1 from "./assets/dms1.jpg";
import DMS2 from "./assets/dms2.jpg";
import DMS3 from "./assets/dms3.jpg";
import DMS4 from "./assets/dms4.jpg";
import NATION_COURIER_DASH from "./assets/nation_courier_dash.jpg";
import NATION_COURIER_HOME_PAGE from "./assets/nation_courier_home_page.jpg";
import NEAREST_AGENT from "./assets/nearest_agent.jpg";

const SliderProjects = () => {
  // eslint-disable-next-line no-unused-vars
  let sliderRef = useRef(null);
  // const play = () => {
  //   sliderRef.slickPlay();
  // };
  // const pause = () => {
  //   sliderRef.slickPause();
  // };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div>
      <div className="slider-container container-fluid bg-dark p-3">
        <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
          <div className="">
            <img
              className="img-fluid p-3"
              src={NATION_COURIER_HOME_PAGE}
              alt=""
            />
          </div>
          <div className="">
            <img className="img-fluid p-3" src={NATION_COURIER_DASH} alt="" />
          </div>
          <div className="">
            <img className="img-fluid p-3" src={NEAREST_AGENT} alt="" />
          </div>
          <div className="">
            <img className="img-fluid p-3" src={DMS1} alt="" />
          </div>
          <div className="">
            <img className="img-fluid p-3" src={DMS2} alt="" />
          </div>
          <div className="">
            <img className="img-fluid p-3" src={DMS3} alt="" />
          </div>
          <div className="">
            <img className="img-fluid p-3" src={DMS4} alt="" />
          </div>
          <div className="">
            <img className="img-fluid p-3" src={CASE1} alt="" />
          </div>
          <div>
            <img className="img-fluid p-3" src={CASE2} alt="" />
          </div>
          <div>
            <img className="img-fluid p-3" src={CASE3} alt="" />
          </div>
          {/* <div>
            <img className="img-fluid p-3" src={CASE4} alt="" />
          </div> */}
          {/* <div>
            <img className="img-fluid p-3" src={CASE5} alt="" />
          </div> */}
          <div>
            <img className="img-fluid p-3" src={CLAIM1} alt="" />
          </div>
          <div className="">
            <img className="img-fluid p-3" src={CLAIM2} alt="" />
          </div>
          <div className="">
            <img className="img-fluid p-3" src={CLAIM3} alt="" />
          </div>
          <div className="">
            <img className="img-fluid p-3" src={CLAIM4} alt="" />
          </div>
          <div className="">
            <img className="img-fluid p-3" src={CLAIM5} alt="" />
          </div>
          <div className="">
            <img className="img-fluid p-3" src={CLAIM6} alt="" />
          </div>
          <div className="">
            <img className="img-fluid p-3" src={CLAIM7} alt="" />
          </div>
        </Slider>
      </div>
      {/* <div className="text-center mt-3">
        <button className="btn btn-primary me-2" onClick={play}>
          Play
        </button>
        <button className="btn btn-secondary" onClick={pause}>
          Pause
        </button>
      </div> */}
    </div>
  );
};
export default SliderProjects;
