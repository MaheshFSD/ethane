import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { AiOutlineMenu } from "react-icons/ai";

const links1 = [
  {
    to: "/world",
    title: "World",
  },
  {
    to: "/uspolitics",
    title: "Us Politics",
  },
  {
    to: "/business",
    title: "Business",
  },
  {
    to: "/health",
    title: "Health",
  },
  {
    to: "/entertainment",
    title: "Entertainment",
  },
  {
    to: "/style",
    title: "Style",
  },
  {
    to: "/travel",
    title: "Travel",
  },
  {
    to: "/sports",
    title: "Sports",
  },
  {
    to: "/videos",
    title: "Videos",
  },
];
const links2 = [
  {
    to: "/style",
    title: "Style",
  },
  {
    to: "/travel",
    title: "Travel",
  },
  {
    to: "/sports",
    title: "Sports",
  },
  {
    to: "/videos",
    title: "Videos",
  },
];
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.leftmenu}>
        <Link to="/">
          <img src="cnn_logo.png" alt="logo" />
        </Link>
        {links1.map(({ to, title }) => (
          <Link to={to} key={to}>
            {title}
          </Link>
        ))}
      </div>
      <div className={styles.rightmenu}>
        <Link to="/edition">
          <select>
            <option defaultValue>Edition</option>
            <option>U.S.</option>
            <option>International</option>
            <option>Arabic</option>
            <option>Espanol</option>
          </select>
        </Link>
        <Link className={styles.search} to="/footer">
          <BsSearch />
        </Link>
        <Link className={styles.search} to="/login">
          <CgProfile />
        </Link>
        <Link className={styles.search} to="/footer">
          <AiOutlineMenu />
        </Link>
      </div>
    </div>
  );
};

export { Navbar };
