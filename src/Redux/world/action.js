import axios from "axios";

import {
  GET_DATA_FAILURE,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
} from "./actionType";

const getDataRequest = () => {
  return {
    type: GET_DATA_REQUEST,
  };
};

const getDataSuccess = (payload) => {
  return {
    type: GET_DATA_SUCCESS,
    payload,
  };
};

const getDataFailure = () => {
  return {
    type: GET_DATA_FAILURE,
  };
};

const gitHubUserSearch = (payload) => (dispatch) => {
  dispatch(getDataRequest());
  // const { user } = payload;
  return axios
    .get(`https://api-unit-project-news.herokuapp.com/world`)
    .then((res) => {
      dispatch(getDataSuccess(res.data));
      console.log(res.data);
    })
    .catch((err) => {
      dispatch(getDataFailure());
    });
};

// code for geting data for africa

// const getDataRequest = () => {
//   return {
//     type: GET_DATA_REQUEST,
//   };
// };

// const getDataSuccess = (payload) => {
//   return {
//     type: GET_DATA_SUCCESS,
//     payload,
//   };
// };

// const getDataFailure = () => {
//   return {
//     type: GET_DATA_FAILURE,
//   };
// };

const fetchAfricaData = (payload) => (dispatch) => {
  dispatch(getDataRequest());
  // const { user } = payload;
  return axios
    .get(`https://api-unit-project-news.herokuapp.com/africa`)
    .then((res) => {
      dispatch(getDataSuccess(res.data));
      console.log(res.data);
    })
    .catch((err) => {
      dispatch(getDataFailure());
    });
};

export { gitHubUserSearch, fetchAfricaData };
