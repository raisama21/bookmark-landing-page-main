import React from "react";
import FooterBookmarkLogo from "../img/footer-bookmark-logo.svg";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";

function FooterNavComponent() {
  return (
    <>
      <footer>
        <nav className="footer-nav">
          <ul role="list">
            <div className="nav-list">
              <li className="bookmark-fnav">
                <a href="">
                  <img src={FooterBookmarkLogo} alt="" />
                </a>
              </li>
              <li>
                <a href="#">Feature</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </div>

            <div className="social-icons">
              <li className="facebook">
                <FaFacebookSquare />
              </li>
              <li className="twitter">
                <FaTwitterSquare />
              </li>
            </div>
          </ul>
        </nav>
      </footer>
    </>
  );
}

export default FooterNavComponent;
