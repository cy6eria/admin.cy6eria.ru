import type { PropsWithChildren } from 'react';
import { Dropdown, Layout, Col, Row } from 'antd';
import { Avatar } from '../Avatar';
import { MainNavigation } from '../MainNavigation';
import { UserMenu } from '../UserMenu';
import styles from './MainLayout.module.css';

const { Header, Sider, Content } = Layout;

interface LayoutProps {

}

export const MainLayout = (props: PropsWithChildren<LayoutProps>) => {
    const { children } = props;

    return (
        <Layout className={styles.main}>
            <Header>
                <Row>
                    <Col span={8}></Col>
                    <Col span={8}></Col>
                    <Col span={8}>
                        <UserMenu />
                    </Col>
                </Row>
            </Header>
            <Layout>
                <Sider>
                    <MainNavigation />
                </Sider>
                <Content>{children}</Content>
            </Layout>
        </Layout>
    );
}
