import React from 'react';
import {classNames} from "@/helpers/classNames";
import style from "@/components/Footer/style.module.scss";


const LayoutFooter= () => {
    return (
        <header className={classNames(style.layoutFooter)}>
            hello am header
        </header>
    );
};


export default LayoutFooter;