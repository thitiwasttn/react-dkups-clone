import {store} from "../store/Store"
import {LoginReducerState} from "../reducers/LoginReducer";
import {
    LOGIN_CHANGE_MEMBER_LOGIN_KEY,
    LOGIN_CHANGE_MEMBER_TEL_NO
} from "../constant/LoginConstant";

export function getLoginState(): LoginReducerState {
    return store.getState().loginReducer;
}

export function getMemberTelNo(): string {
    let x: LoginReducerState = getLoginState();
    return x != null ? x.memberTelNo : "";
}

export function getMemberLoginKey(): string {
    let x: LoginReducerState = getLoginState();
    return x != null ? x.memberLoginKey : "";
}

export function setMemberTelNo(telNo: string): void {
    store.dispatch({
        type: LOGIN_CHANGE_MEMBER_TEL_NO,
        loginReducerState: {
            memberTelNo: telNo
        }
    });
}

export function setMemberLoginKey(ukey: string): void {
    store.dispatch({
        type: LOGIN_CHANGE_MEMBER_LOGIN_KEY,
        loginReducerState: {
            memberLoginKey: ukey
        }
    });
}

export function checkLogin(): boolean {
    let ret: boolean;
    let telNo: string = getMemberTelNo();
    let ukey: string = getMemberLoginKey();
    console.log('telNo {} ', telNo);
    console.log('ukey {} ', ukey);
    ret = (telNo !== undefined && telNo !== '')
        && (ukey !== undefined && ukey !== '');
    console.log(ret);
    return ret;
}
