import React, {memo} from 'react';
import {classNames} from '@/helpers/classNames'


interface ListWrapperPropsInterface {
    children: React.ReactNode;
    className?: string;
}
const ListWrapper = ({children , className} : ListWrapperPropsInterface) => {
    return (
        <div className={classNames(className as string)}>
            {children}
        </div>
    );
};

export default memo(ListWrapper);