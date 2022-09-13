import "./topbar.scss";
import { Person, Email } from "@mui/icons-material";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            A N A S T A S I Y A ~ L I T V I N O V A
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

        <div className="right">
          <div className="port" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
