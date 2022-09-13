import { useState } from "react";
import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1>P O R T F O L I O</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <a href="https://wumbo-dot.github.io/EventRadar/">
            <img
              src="assets/event.png"
              alt="Event Radar imag"
              width="300"
              height="300"
            />
          </a>
          <h3>E V E N T R A D A R </h3>
        </div>
        <div className="item">
          <img
            src="assets/bantr.png"
            alt="bantr imag"
            width="300"
            height="300"
          />
          <h3>B A N T R </h3>
        </div>
        <div className="item">
          <a href="https://bantr-study.herokuapp.com/">
            <img
              src="assets/rename.png"
              alt="password generator"
              width="300"
              height="300"
            />
          </a>
          <h3>P A S S W O R D</h3>
        </div>
        <div className="item">
          <a href="https://anitinky13.github.io/Password-Generator/">
            <img
              src="assets/taskmaster.png"
              alt="taskmaster imag"
              width="300"
              height="300"
            />
          </a>
          <h3>T A S K M A S T E R</h3>
        </div>
        <div className="item">
          <a href="https://anitinky13.github.io/taskmaster-pro/">
            <img
              src="assets/tasks.png"
              alt="tasks  imag"
              width="300"
              height="300"
            />
          </a>
          <h3>T A S K I N A T O R</h3>
        </div>
        <div className="item">
          <a href="https://anitinky13.github.io/Work-Day-Scheduler/">
            <img
              src="assets/workday.png"
              alt="workday imag"
              width="300"
              height="300"
            />
          </a>
          <h3>W O R K D A Y </h3>
        </div>
      </div>
    </div>
  );
}
