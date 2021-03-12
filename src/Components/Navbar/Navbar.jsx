import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { dropMenu, navDropMenu } from "../../Redux/SearchPage/action";
import { useDispatch, useSelector } from "react-redux";

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
  const dispatch = useDispatch()
  const menu = useSelector((state) => state.search.menu)
  return (
    <div className={styles.navbar}>
      <div className={styles.leftmenu}>
        <Link to="/">
          <img src="../cnn_logo.png" alt="logo" />
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
        <Link className={styles.search} to="/profile">
          <CgProfile />
        </Link>
        <Link className={styles.search}>
        <button onClick={() => dispatch(navDropMenu())}  style={{backgroundColor:"transparent", border:"none", outline:"none"}}>
          {!menu? <AiOutlineMenu style={{color:"white", fontSize:"20px", fontWeight:"bold"}}/>: <AiOutlineClose style={{color:"white", fontSize:"20px", fontWeight:"bold"}}/>}
        </button>
        </Link>
      </div>
    </div>
  );
};

export { Navbar };
