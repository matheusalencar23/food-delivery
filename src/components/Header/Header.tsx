import classNames from "classnames";
import { useState } from "react";
import Button from "../Button/Button";
import Close from "../Icons/Close";
import Menu from "../Icons/Menu";
import ShoppingBag from "../Icons/ShoppingBag";
import "./style.scss";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const navbarAsideStyle = classNames(
    "header__navbar-aside",
    navbarOpen && "open",
  );

  const navBar = (
    <nav className="header__navbar">
      <ul>
        <li className="active">Home</li>
        <li>Menu</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
      <div className="header__bag">
        <ShoppingBag />
      </div>
      <div className="header__buttons">
        <Button variant="secondary">Register</Button>
        <Button variant="primary">Login</Button>
      </div>
    </nav>
  );

  return (
    <>
      <header className="header">
        <h1 className="header__logo">F&D</h1>
        <div className="header__navbar-container">{navBar}</div>
        <button
          className="header__button-open"
          onClick={() => setNavbarOpen(true)}
        >
          <Menu />
        </button>
      </header>
      <aside className={navbarAsideStyle}>
        <button
          className="header__button-close"
          onClick={() => setNavbarOpen(false)}
        >
          <Close />
        </button>
        {navBar}
      </aside>
    </>
  );
}
