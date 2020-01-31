import React, {useEffect, useContext} from "react";
import {Context as AuthContext} from "../context/AuthContext";

const SplashScreen = () => {
    const {actions} = useContext(AuthContext);
    const {tryLocalSignin} = actions;

    useEffect(() => {
            tryLocalSignin();
        },
        []
    );

    return null;
};

export default SplashScreen;
