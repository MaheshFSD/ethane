import axios from "axios"
import { DATA_REQUEST, REQUEST_FAILURE, REQUEST_SUCCESS } from "./actionType"


const dataRequest = () => {
    return {
        type:DATA_REQUEST
    }
}

const requestSuccess = (payload) => {
    return {
        type:REQUEST_SUCCESS,
        payload
    }
}

const requestFailure = () => {
    return {
        type:REQUEST_FAILURE
    }
}

const getData = (payload) => (dispatch) => {
    dispatch(dataRequest());
    return axios.get('http://newsapi.org/v2/everything?q=fashion&apiKey=bb6d2829865242389bb3d5e43e425c8e')
    .then((res) => {
        dispatch(requestSuccess(res.data.articles))
    })
    .catch(err => dispatch(requestFailure()))
}

export {getData}
