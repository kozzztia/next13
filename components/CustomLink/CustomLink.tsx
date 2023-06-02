"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import style from "./style.module.scss"
import React from "react";
import {classNames} from "@/helpers/classNames";

const CustomLink = ({children, ...rest}: { children: React.ReactNode } & LinkProps) => {
    const { href } = rest;
    const pathName = usePathname();
    const isActive = pathName === href;
    return (
        <Link {...rest} className={classNames(style.link ,isActive ? style.active : "")}>
            {children}
        </Link>
    );
};

export default CustomLink;