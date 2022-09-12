import "./intro.scss";
// import { init } from "ityped";
// import { useEffect, useRef } from "react";

export default function Intro() {
  //   const textRef = useRef();

  //   useEffect(() => {
  //     init(textRef.current, {
  //       showCursor: true,
  //       backDelay: 1500,
  //       backSpeed: 60,
  //       strings: ["Developer", "Designer", "Content Creator"],
  //     });
  //   }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="assets/image2.jpg" alt="me" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello & Welcome!</h2>
          <h1>I am Anastasiya Litvinova</h1>
          <h3>
            web <span>D E V E L O P E R</span>
          </h3>
          <h4>
            Personable and passionate web developer based in San Antonio,TX.
            Check out my work, and reach out! I can't wait to become a valuable
            asset!
          </h4>
        </div>
      </div>
    </div>
  );
}
