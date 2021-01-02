import React, {useState, useEffect} from "react";
import './LoginComponentCss.css'
import {setMemberTelNo, setMemberLoginKey, checkLogin , logger} from "../../utils/Utils";
import {Redirect} from "react-router-dom";

const LoginComponent: React.FC = () => {
    let telNo: string = "";
    let password: string = "";
    const inputTelNo: string = "input__telNo"
    const inputPassword: string = "input__password"
    const [isLogin, setIsLogin] = useState<Boolean>();
    let redir: string = "/login";
    useEffect(() => {
        logger('LoginComponent');
        setIsLogin(checkLogin());
    }, []);

    const clearValueInput = () => {
        $(`#${inputTelNo}`).val('');
        $(`#${inputPassword}`).val('');
    };


    const login = () => {
        logger(`telNo ${telNo}`)
        logger(`password ${password}`)
        setMemberTelNo(telNo);
        setMemberLoginKey(password);
        clearValueInput();
        if (checkLogin()) {
            setIsLogin(checkLogin());
        }
    };

    return (
        <div className={"LoginComponent__"}>
            {(isLogin) ? <Redirect to="/profile"/> : <div></div>}
            <div className="LoginComponent__login__form">
                <div className="row" style={{justifyContent: "center"}}>
                    <div className="input-group input-group-sm col-10 LoginComponent__login__form__telno">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-sm" style={{width: "100px"}}>tel number</span>
                        </div>
                        <input type="tel" className="form-control" aria-label="Small"
                               aria-describedby="inputGroup-sizing-sm" onChange={event => telNo = event.target.value}
                               id={inputTelNo}
                        />

                    </div>
                    <div className="input-group input-group-sm col-10 LoginComponent__login__form__password">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-sm"
                                  style={{width: "100px"}}>password</span>
                        </div>
                        <input type="password" className="form-control" aria-label="Small"
                               aria-describedby="inputGroup-sizing-sm"
                               onChange={event => password = event.target.value}
                               id={inputPassword}
                        />
                    </div>
                </div>
                <a className="btn btn-primary margin_top" onClick={login}>login</a>
            </div>
        </div>
    );
};

export default LoginComponent;