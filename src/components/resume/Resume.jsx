import "./resume.scss";
import resume1 from "../../assets/resume1.png";

export default function Resume() {
  return (
    <section id="resume" className="resume">
      <h4 className="section-title-primary-border">R E S U M E</h4>
      <div className="container">
        <a href="https://docs.google.com/document/d/1Ryzs-IX0zzlg-0OYU6tm2yHGXVfCqtC4gnuaR3gJ-_A/edit?usp=sharing ">
          <img src={resume1} alt="resume" width="600" height="700" />
        </a>
      </div>
    </section>
  );
}
