import React from "react";
import styled from "styled-components";
import { Navbar } from "../Navbar/Navbar";
import { IoPersonCircleOutline } from "react-icons/io5";
export const ProfileSideBar = () => {
  return (
    <div>
      <PROFILE__DIV>
        <IoPersonCircleOutline></IoPersonCircleOutline>
        <h4>PROFILE</h4>
      </PROFILE__DIV>
    </div>
  );
};
export const NewsLetter = () => {
  return (
    <NEWSLETTER__DIV>
      <h1>Newsletter Subscriptions</h1>
      <p>Manage your email subscriptions to our newsletters below.</p>
      <p> You are subscribing at kundansingh.ks630@gmail.com</p>
    </NEWSLETTER__DIV>
  );
};

export const AccountSetting = () => {
  const handleSubmit = (e) => {
    //
    // e.preventDefault();
  };

  return (
    <>
      <ACC__MAIN__DIV>
        <h1>My Account Settings</h1>
        <span>These details will only be visible to you and CNN.</span>

        <FORM__DIV>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Display Name</label>
            <input type="text" name="username" />
            <input type="submit" id="btn" value="Save Changes" />
          </form>
        </FORM__DIV>
        <HR__DIV>
          <span>&nbsp;</span>
        </HR__DIV>

        <div></div>
      </ACC__MAIN__DIV>
    </>
  );
};

const Profile = () => {
  return (
    <>
      <Navbar></Navbar>

      <MAIN__DIV>
        <LEFT__DIV>
          <ProfileSideBar></ProfileSideBar>
        </LEFT__DIV>
        <RIGHT__DIV>
          <AccountSetting></AccountSetting>
          <NewsLetter></NewsLetter>
        </RIGHT__DIV>
      </MAIN__DIV>
    </>
  );
};

export { Profile };

const MAIN__DIV = styled.div`
  display: flex;
  width: 90%;
  height: 80vh;
  margin: auto;
  /* padding: 10px; */
  flex-direction: row;
  justify-content: space-evenly;
  /* border: 1px solid red; */
`;

const LEFT__DIV = styled.div`
  display: flex;
  flex-direction: row;
  width: 20%;
  background-color: #e6e6e6;
  /* border: 1px solid red; */
`;
const RIGHT__DIV = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  width: 80%;
  background-color: #fff;
  /* margin-left: 5px; */
`;

const PROFILE__DIV = styled.div`
  display: flex;
  flex-direction: row;
  width: 200px;
  align-items: center;
  /* height: 40px; */
  /* justify-content: space-between; */

  /* border: 1px solid red; */
  h4 {
    margin-left: 5px;
  }
  svg {
    font-size: 40px;
    margin-left: 20px;
  }
`;

const ACC__MAIN__DIV = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  /* margin-left: 22px; */
`;

const FORM__DIV = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */
  /* margin: 20px; */
  form {
    /* border: 1px solid red; */
    margin-top: 30px;
    width: 100%;
    /* padding: 20px; */
    display: flex;
    flex-direction: column;
    label {
      /* padding: 20px; */
    }

    input {
      height: 35px;
      width: 300px;
      margin-top: 10px;
      font-size: 18px;
    }

    #btn {
      width: 170px;
      margin-top: 25px;

      background-color: black;
      color: #fff;
      height: 45px;
      font-size: 20px;

      border: 1px solid #ccc;
      border-radius: 5px;
    }
    #btn:hover {
      cursor: pointer;
      opacity: 0.7;
    }
  }
`;

const HR__DIV = styled.div`
  border: 1px solid #ccc;
  width: 100%;
  margin: 30px auto;
  background-color: #ccc;
  height: 0px;
`;

const NEWSLETTER__DIV = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  width: 100%;
  /* padding: 0;
  margin: 0; */
  h1 {
    font-size: 20px;
    margin: 10px 20px;
    /* font-weight: lighter; */
  }
  p {
    padding: 0;
    margin: 10px 20px;
    /* font-size: 16px; */
  }
`;
