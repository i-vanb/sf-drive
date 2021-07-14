import React from "react";
import "./AuthTempStyle.css";

export const AuthTemp = () => {
    return(
        <div className="auth-container">
            <h2>Title</h2>
            <h1>Title 2</h1>
            <input placeholder="логин"/>
            <input placeholder="пароль"/>
            <button>Войти</button>
        </div>
    )
}
