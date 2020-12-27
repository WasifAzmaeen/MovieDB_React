import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo" style={{ marginLeft: 20 }}>
            My Movie DB
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Top Movies</a>
            </li>
            <li>
              <a href="badges.html">TV Shows</a>
            </li>
            <li>
              <a href="collapsible.html">Profile</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
