import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Footer } from "../Footer/Footer";
const WorldDetails = () => {
  const dispatch = useDispatch();

  const { data, title, publishedAt } = useSelector(
    (state) => state.world,
    shallowEqual
  );
  //   console.log(data);
  return (
    <>
      {data.slice(5, 7).map((item, index) => (
        <IMG_DIV key={index}>
          <img src={item.urlToImage} alt="image-1"></img>
          <h1>{item.title}</h1>
          <p>
            {item.content}&nbsp;&nbsp; &nbsp;{item.description}&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp; &nbsp;
            <br />
            <br />
            {item.content}&nbsp;&nbsp; &nbsp;{item.description}&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp; &nbsp;
            <br />
            <br />
            {item.content}&nbsp;&nbsp; &nbsp;{item.description}
          </p>
          <FOOTER__CONTENT>
            <span>Publish Date : {item.publishedAt}</span>
            <a href={item.url}>
              Click me to know more <FaExternalLinkAlt></FaExternalLinkAlt>
            </a>
            <span>Author : {item.author}</span>
          </FOOTER__CONTENT>
        </IMG_DIV>
      ))}

      <Footer></Footer>
    </>
  );
};

export { WorldDetails };

const IMG_DIV = styled.div`
  border: 1px solid #ccc;
  display: flex;
  width: 80%;
  margin: 10px auto;
  padding: 10px;
  flex-direction: column;
  img {
    width: 80%;
    height: 80vh;
    margin: auto;
  }
  h1 {
    text-align: center;
  }
  p {
    margin: 20px;
  }
`;

const FOOTER__CONTENT = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40px;
  justify-content: space-evenly;
  a {
    color: black;
  }
`;
