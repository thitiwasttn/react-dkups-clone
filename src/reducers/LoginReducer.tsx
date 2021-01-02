import {
    LOGIN_CHANGE_MEMBER_LOGIN_KEY,
    LOGIN_CHANGE_MEMBER_TEL_NO
} from "../constant/LoginConstant";

export interface LoginReducerState {
    memberTelNo: string;
    memberLoginKey: string;
}

export interface LoginReducerAction {
    type: string;
    loginReducerState: LoginReducerState;
}

export default function LoginReducer(state: LoginReducerState, action: LoginReducerAction) {
    switch (action.type) {
        case LOGIN_CHANGE_MEMBER_TEL_NO:
            state = {
                ...state,
                memberTelNo: action.loginReducerState.memberTelNo
            }
            break;
        case LOGIN_CHANGE_MEMBER_LOGIN_KEY:
            state = {
                ...state,
                memberLoginKey: action.loginReducerState.memberLoginKey
            }
            break;
        default:
            state = {
                ...state
            }
            break;
    }
    return state;
}