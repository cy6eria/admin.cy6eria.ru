import type { PropsWithChildren } from 'react';
import { Layout, Menu } from 'antd';
import { MainNavigation } from '../MainNavigation';
import styles from './MainLayout.module.css';

const { Header, Sider, Content } = Layout;

interface LayoutProps {

}

export const MainLayout = (props: PropsWithChildren<LayoutProps>) => {
    const { children } = props;

    return (
        <Layout className={styles.main}>
            <Header>Header</Header>
            <Layout>
                <Sider>
                    <MainNavigation />
                </Sider>
                <Content>{children}</Content>
            </Layout>
        </Layout>
    );
}
