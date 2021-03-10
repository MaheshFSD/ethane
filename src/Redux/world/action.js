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

// const getDataFromApi = (payload) => (dispatch) => {
//   dispatch(getDataRequest());
//   return axios
//     .get(`https://api.github.com/search/users?q=masai`)
//     .then((res) => {
//       dispatch(getDataSuccess(res.data));
//       console.log(res.data);
//       console.log("object");
//     })
//     .catch((err) => {
//       dispatch(getDataFailure());
//     });
// };

const gitHubUserSearch = (payload) => (dispatch) => {
  dispatch(getDataRequest());
  // const { user } = payload;
  return axios
    .get(
      `http://newsapi.org/v2/everything?q=world&apiKey=c96cb0e8eff943f4ba79b9dd233fff42`
    )
    .then((res) => {
      dispatch(getDataSuccess(res.data.articles));
      // console.log(res.data.articles);
    })
    .catch((err) => {
      dispatch(getDataFailure());
    });
};

export { gitHubUserSearch };
// export { getDataFromApi };
