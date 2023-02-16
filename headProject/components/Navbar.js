import React from "react";
import NavbarHeader from "./NavbarHeader";
import { useSelector } from "react-redux";

const Navbar = (props) => {
  const isBurgerOpen = useSelector((state) => state.isBurgerOPen);

  console.log("Navbar");
  return (
    <div>
      <nav className="navbar_container">
        <div className="navbar" style={{ left: isBurgerOpen }}>
          <ul className="navbar_width">
            <NavbarHeader />
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
