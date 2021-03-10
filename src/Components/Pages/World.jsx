import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { gitHubUserSearch } from "../../Redux/world/action";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
const World = () => {
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.world, shallowEqual);
  //   console.log(data);
  useEffect(() => {
    dispatch(gitHubUserSearch());
  }, [dispatch]);
  return (
    <>
      <BODY_CONTAINER_MAIN_DIV>
        <h1>World</h1>
        <TOP_HEADER_DIV_1>
          {data.slice(0, 1).map((item, index) => (
            <IMG_DIV key={index}>
              <img src={item.urlToImage} alt="image-1"></img>
              <span>{item.title}</span>
            </IMG_DIV>
          ))}
          <LINK_DIV>
            {data.slice(1, 5).map((item, index) => (
              <INSIDE_LINK_DIV key={index}>
                <a href={item.title}>{item.title}</a>
              </INSIDE_LINK_DIV>
            ))}
          </LINK_DIV>
        </TOP_HEADER_DIV_1>
        <TAG_HEADING>
          <H1_TAG>
            Around the world
            <span>&nbsp;</span>
          </H1_TAG>
        </TAG_HEADING>
        <AROUND_DIV_CONTENT>
          {data.slice(0, 6).map((item, index) => (
            <IMG__HEADER>
              <h2>Europe</h2>
              <IMG_DIV_2>
                <img src={item.urlToImage} alt="urlToImage" />
                <h3>{item.title}</h3>
              </IMG_DIV_2>
              <LINK_DIV_2>
                {data.slice(8, 12).map((item, index) => (
                  <INSIDE_LINK_DIV_2 key={index}>
                    <a href={item.title}>{item.title}</a>
                  </INSIDE_LINK_DIV_2>
                ))}
              </LINK_DIV_2>
            </IMG__HEADER>
          ))}
        </AROUND_DIV_CONTENT>

        {/* code for Featured sections */}

        <TAG_HEADING>
          <H1_TAG>
            Featured sections
            <span>&nbsp;</span>
          </H1_TAG>
        </TAG_HEADING>
        <AROUND_DIV_CONTENT>
          {data.slice(14, 17).map((item, index) => (
            <IMG__HEADER>
              <h2>Climate in crisis</h2>
              <IMG_DIV_2>
                <img src={item.urlToImage} alt="urlToImage" />
                <h3>{item.title}</h3>
              </IMG_DIV_2>
              <LINK_DIV_2>
                {data.slice(8, 12).map((item, index) => (
                  <INSIDE_LINK_DIV_2 key={index}>
                    <a href={item.title}>{item.title}</a>
                  </INSIDE_LINK_DIV_2>
                ))}
              </LINK_DIV_2>
            </IMG__HEADER>
          ))}
        </AROUND_DIV_CONTENT>

        {/* code for Special Features */}

        <TAG_HEADING>
          <H1_TAG>
            Special Features
            <span>&nbsp;</span>
          </H1_TAG>
        </TAG_HEADING>
        <AROUND_DIV_CONTENT>
          {data.slice(7, 10).map((item, index) => (
            <IMG__HEADER>
              <h2> Dubai Now</h2>
              <IMG_DIV_2>
                <img src={item.urlToImage} alt="urlToImage" />
                <h3>{item.title}</h3>
              </IMG_DIV_2>
              <LINK_DIV_2>
                {data.slice(7, 10).map((item, index) => (
                  <INSIDE_LINK_DIV_2 key={index}>
                    <a href={item.title}>{item.title}</a>
                  </INSIDE_LINK_DIV_2>
                ))}
              </LINK_DIV_2>
            </IMG__HEADER>
          ))}
        </AROUND_DIV_CONTENT>

        {/* code for More of the latest stories  */}

        <TAG_HEADING>
          <H1_TAG_2>
            More of the latest stories
            <span>&nbsp;</span>
          </H1_TAG_2>
        </TAG_HEADING>
        <AROUND_DIV_CONTENT>
          {data.slice(0, 20).map((item, index) => (
            <IMG__HEADER_2>
              <IMG_DIV_3>
                <img src={item.urlToImage} alt="urlToImage" />
                <h3>{item.title}</h3>
              </IMG_DIV_3>
            </IMG__HEADER_2>
          ))}
        </AROUND_DIV_CONTENT>
        <TAG_HEADING>
          <H1_TAG_3>
            <span>&nbsp;</span>
          </H1_TAG_3>
        </TAG_HEADING>
      </BODY_CONTAINER_MAIN_DIV>
      <Footer></Footer>
    </>
  );
};

export { World };
const BODY_CONTAINER_MAIN_DIV = styled.div`
  border: 1px solid #ddd;
  width: 80%;
  display: flex;
  margin: auto;
  flex-direction: column;
  h1 {
    display: flex;
    margin-left: 20px;

    align-items: flex-start;
  }
`;
const TOP_HEADER_DIV_1 = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
`;

const IMG_DIV = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  align-items: flex-start;
  img {
    width: 70%;
    height: 450px;
    margin: 0 20px;
  }
  span {
    margin: 20px;
  }
`;

const LINK_DIV = styled.div`
  display: flex;
  margin: 0px 20px;
  flex-direction: column;
  align-items: flex-start;
`;

const INSIDE_LINK_DIV = styled.div`
  border-top: 1px solid #ccc;
  display: flex;
  align-items: flex-start;
  margin: 5px 0px;
  width: 73%;
  a {
    text-decoration: none;
    color: black;
  }
`;

const TAG_HEADING = styled.div``;

const H1_TAG = styled.h1`
  display: flex;
  flex-direction: "row";
  align-items: "center";
  justify-content: space-evenly;
  width: 98%;
  font-size: 28px;
  span {
    border-top: 4px solid #ccc;
    border-bottom: 4px solid #ccc;
    height: 3px;
    width: 75%;
    display: flex;
    margin-top: 15px;
    align-items: "center";
  }
`;
const H1_TAG_2 = styled.h1`
  display: flex;
  flex-direction: "row";
  align-items: "center";
  justify-content: space-evenly;
  width: 98%;
  font-size: 28px;
  span {
    border-top: 4px solid #ccc;
    border-bottom: 4px solid #ccc;
    height: 3px;
    width: 60%;
    display: flex;
    margin-top: 15px;
    align-items: "center";
  }
`;
const H1_TAG_3 = styled.h1`
  display: flex;
  flex-direction: "row";
  align-items: "center";
  justify-content: space-evenly;
  width: 98%;
  font-size: 28px;
  span {
    border-top: 4px solid #ccc;
    border-bottom: 4px solid #ccc;
    height: 3px;
    width: 100%;
    display: flex;
    margin-top: 15px;
    align-items: "center";
  }
`;

const AROUND_DIV_CONTENT = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

const IMG_DIV_2 = styled.div`
  display: flex;
  width: 350px;
  height: 350px;
  margin: 0px auto;
  align-items: center;
  flex-direction: column;
  img {
    width: 350px;
    height: 250px;
  }
  span {
  }
`;
const IMG_DIV_3 = styled.div`
  display: flex;
  /* border: 1px solid #725f5f; */
  width: 300px;
  height: 300px;
  margin: 0px auto;
  align-items: center;
  flex-direction: column;
  img {
    width: 300px;
    height: 250px;
  }
  span {
  }
`;

const LINK_DIV_2 = styled.div`
  display: flex;
  width: 98%;
  margin: auto;
  flex-direction: column;
`;

const IMG__HEADER = styled.div`
  display: flex;
  margin: 10px auto;
  width: 350px;
  flex-direction: column;
  align-items: flex-start;

  h2 {
    padding: 0px;
    margin: 0px;
    padding: 10px;
  }
`;

const IMG__HEADER_2 = styled.div`
  display: flex;
  margin: 10px auto;
  width: 300px;
  flex-direction: column;
  align-items: flex-start;

  h2 {
    padding: 0px;
    margin: 0px;
    padding: 10px;
  }
`;

const INSIDE_LINK_DIV_2 = styled.div`
  border-top: 1px solid #ccc;
  display: flex;
  align-items: flex-start;
  margin: 7px;
  padding: 5px;
  width: 92%;
  text-align: left;
  a {
    text-decoration: none;
    color: black;
  }
`;
