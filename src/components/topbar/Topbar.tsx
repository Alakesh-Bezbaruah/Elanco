import "./Topbar.css";
import { AddIcCall, Email, AddLocationAlt } from "@mui/icons-material";

export default function Topbar() {
  return (
    <>
      <div className="topbar">
        <div className="topbarWrapper">
          <div className="topbarLeft">
            <img className="topbarLeftImg" src="assets/logo.png" alt="" />
          </div>

          <div className="topbarCenter">
            <span className="EName">
              <span className="style">E</span>lanco
            </span>
            <br />
            <span className="EDetails">
              An enterprise of purpose-driven people, we believe healthy animals
              are key to solving some of the world's most pressing issues
            </span>
          </div>

          <div className="topbarRight">
            <div className="iconContainer">
              <AddIcCall className="icon" />
              <span className="iconDetails">54-9-11-4546-4112</span>
            </div>
            <div className="iconContainer">
              <Email className="icon" />
              <span className="iconDetails">elanco@gamil.com</span>
            </div>
            <div className="iconContainer">
              <AddLocationAlt className="icon" />
              <span className="iconDetails">
                India , United States
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
