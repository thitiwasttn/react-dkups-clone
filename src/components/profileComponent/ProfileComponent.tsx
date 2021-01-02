import React, {useEffect, useState} from "react";
import {logOut, checkLogin, logger as log} from "../../utils/Utils";
import {Redirect} from "react-router-dom";

const ProfileComponent: React.FC = () => {
    const [isLogin, setIsLogin] = useState<Boolean>(checkLogin());

    useEffect(() => {
        log('ProfileComponent');
        setIsLogin(checkLogin());
        log(`isLogin ${isLogin}`);
    }, []);

    checkLogin();
    return (
        <>
            {(isLogin) ? <div></div> : <Redirect to="/login"/>}
            <button className="btn btn-danger" onClick={() => {
                logOut();
                setIsLogin(checkLogin());
            }}>log out
            </button>
        </>
    );
}

export default ProfileComponent;