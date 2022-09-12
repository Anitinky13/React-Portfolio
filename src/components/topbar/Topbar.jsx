import "./topbar.scss";
import { Person, Email } from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            master.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>(210)819-3674</span>
          </div>
          <div className="itemContainer">
            <Email className="icon" />
            <span>Ayefanova1@gmail.com</span>
          </div>
        </div>

        <div className="right"></div>
      </div>
    </div>
  );
}
