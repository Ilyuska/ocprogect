import { NavLink, Outlet } from "react-router-dom";
import classes from "./Loyout.module.css";
import logo from "../../img/Logo.png";
import profile from "../../img/Polzovatel.png";

import { Footer } from "./Footer/Footer";

function Layout() {
  return (
    <>
      <header className={classes.header}>
        <NavLink to="/">
          <img src={logo} alt="Logo" className={classes.img_logo} />
        </NavLink>
        <div className={classes.nav}>
          <NavLink to="/" className={classes.nav_item}>
            Home
          </NavLink>
          <NavLink to="/menu" className={classes.nav_item}>
            Menu
          </NavLink>
          <NavLink to="/about" className={classes.nav_item}>
            About
          </NavLink>
          <NavLink to="/contact" className={classes.nav_item}>
            Contacts
          </NavLink>
        </div>
        <NavLink to="#">
          <img src={profile} alt="Profile" className={classes.img_profile} />
        </NavLink>
      </header>
      <Outlet />
      <Footer />
    </>
  );
}

export { Layout };
