import React from 'react';
import {classNames} from "@/helpers/classNames";
import style from"./style.module.scss"


const LayoutHeader = () => {
    return (
        <header className={classNames(style.layoutHeader)}>
            hello am header
        </header>
    );
};

export default LayoutHeader;