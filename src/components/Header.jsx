import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink
              to="/"
              className={(navData) =>
                navData.isActive
                  ? `${styles.link} ${styles.active}`
                  : `${styles.link}`
              }
              end
            >
              Produtos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contato"
              className={(navData) =>
                navData.isActive
                  ? `${styles.link} ${styles.active}`
                  : `${styles.link}`
              }
            >
              Contato
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
