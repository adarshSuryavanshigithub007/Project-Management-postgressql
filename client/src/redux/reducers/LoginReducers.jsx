import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT } from "../../utils/Constant";



const initialState = {
    userInfo: null,
    error: null
};
export const userLoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { ...state };
        case USER_LOGIN_SUCCESS:
            return { ...state,userInfo: action.payload };
        case USER_LOGIN_FAIL:
            return { ...state, error: action.payload };
        case USER_LOGOUT:
            return {};
        default:
            return state;
    }
};