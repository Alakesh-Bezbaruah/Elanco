import { Link } from "react-router-dom";
import "./Navbar.css";
import Home from "../../pages/home/Home";

export default function Navbar() {
  return (
    <>
      <header>
        <nav className="navbar">
            <div className="navbarWrapper">
                <ul className="navbarItems">
                    <li><Link to="/"></Link></li>
                </ul>
                <ul className="navbarItems">
                    <li><Link to="/einfo">Elanco’s  Information </Link></li>
                </ul>

                <div className="Investor">
                  <a href="https://investor.elanco.com/" className="atag">
                      <div className="getInvestor">INVESTOR</div>
                  </a>
                </div>

            </div>
        </nav>
      </header>
    </>
  )
}
