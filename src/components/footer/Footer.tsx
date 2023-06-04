import "./Footer.css";
import { Facebook, YouTube, Instagram, Twitter } from "@mui/icons-material";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footerWrapper">
          <footer>
            <div className="row">
              <div className="col">
                <img src="/assets/logo.png" alt="" className="logo11" />
                <p>Elanco</p>
                <p>
                  An enterprise of purpose-driven people, we believe healthy
                  animals are key to solving some of the world's most pressing
                  issues.
                </p>
              </div>
              <div className="col">
                <h3>OFFICE ADDRESS</h3>
                <p> India , US</p>
                <p className="email-id">elanco@gamil.com</p>
                <p>000000000000</p>
              </div>
              <div className="col">
                <h3>SOCIAL LINKS</h3>
                <ul className="matIcomText">
                  <li>
                    <Facebook className="matIcon" />
                  </li>
                  <br />
                  <li>
                    <YouTube className="matIcon" />
                  </li>
                  <br />
                  <li>
                    <Instagram className="matIcon" />
                  </li>
                  <br />
                  <li>
                    <Twitter className="matIcon" />
                  </li>
                </ul>
              </div>
              <div className="col">
                <h3>DIRECT CONTACT US</h3>
                <div className="ceo">
                  <p>CEO</p>
                  <p>xyz</p>
                  <p>000000000000</p>
                </div>
                <hr/>
                <div className="dir">
                  <p>Director</p>
                  <p>abc</p>
                  <p>0000000000</p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
