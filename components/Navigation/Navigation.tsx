import React from 'react';
import ListWrapper from "@/components/ListWrapper/ListWrapper";
import {navigationsLink} from "@/consts/navigationsLink";
import CustomLink from "@/components/CustomLink/CustomLink";
import style from './style.module.scss'
const Navigation = () => {
    return (
        <ListWrapper className={style.navigation}>
            {
                navigationsLink.map(item => <CustomLink key={item.id} href={item.path}>{item.title}</CustomLink>)
            }
        </ListWrapper>
    );
};

export default Navigation;