import React from 'react';
import { Avatar as AvatarComponent } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useUser } from '@clerk/nextjs';

interface AvatarProps {

}

export const Avatar = (props: AvatarProps) => {
  const { user } = useUser();

  if (!user) {
    return <AvatarComponent icon={<UserOutlined />} />;
  }

  const { fullName, profileImageUrl } = user;
  const firstLetters = fullName ? fullName.split(' ').map((word) => word.charAt(0)).join('') : '';

  if (profileImageUrl) {
    return <AvatarComponent src={<img src={profileImageUrl} style={{ width: '32px' }} alt={firstLetters} />} />
  }

  return (
    <AvatarComponent style={{ backgroundColor: '#87d068' }}>{firstLetters}</AvatarComponent>
  );
}
