import { DATA_REQUEST, REQUEST_FAILURE, REQUEST_SUCCESS } from "./actionType"


const initialState = {
    data:[],
    isLoading: false,
    isError: null
}

const StyleReducer = (state=initialState,{type, payload}) => {
    switch (type) {
        case DATA_REQUEST: 
            return {
                ...state,
                isLoading: true
            };
        case REQUEST_SUCCESS: 
            return {
                ...state,
                isLoading: false,
                data: payload
            };
        case REQUEST_FAILURE: 
            return {
                ...state,
                isLoading: false,
                isError: true,
            };

        default: 
            return {
                ...state
            }
    }
}

export {StyleReducer}