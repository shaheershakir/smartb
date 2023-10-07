import Tilt from "react-parallax-tilt";
import icon from "./icon.png";
import "./Logo.css";

function Logo() {
  return (
    <div className="ma4 mt0">
      <Tilt>
        <div
          className="br2 shadow-2"
          style={{
            height: "80px",
            width: "80px",
          }}
        >
          <img src={icon} alt="logo" style={{ paddingTop: "5px" }} />
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;
