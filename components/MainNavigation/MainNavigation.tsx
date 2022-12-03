import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import { Menu } from 'antd';

interface MainNavigationProps {

}

const items = [
    { label: 'Главная', key: '/' }, // remember to pass the key prop
    { label: 'Посты', key: '/posts' }, // which is required
];


export const MainNavigation = (props: MainNavigationProps) => {
    const { push } = useRouter();

    const handleClick = useCallback(({ key }) => {
        push(key);
    }, [push]);

    return (
        <Menu items={items} onClick={handleClick} />
    );
}
