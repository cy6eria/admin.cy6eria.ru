import type { MouseEvent } from 'react';
import { useAuth } from '@clerk/nextjs';
import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';
import { Avatar } from '../Avatar';

interface UserMenuProps {

}

const preventDefault = (e: MouseEvent<HTMLAnchorElement>) => e.preventDefault();

export const UserMenu = (props: UserMenuProps) => {
    const { signOut } = useAuth();

    const items: MenuProps['items'] = [
        {
            key: 'logout',
            label: 'Logout',
            onClick: () => {
                signOut();
            }
        },
    ];

    return (
        <Dropdown menu={{ items }}>
            <a style={{ display: 'block' }} onClick={preventDefault}>
                <Avatar />
            </a>
        </Dropdown>
    );
}
