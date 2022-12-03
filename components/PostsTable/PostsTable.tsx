import React, { useState, useCallback, useMemo } from 'react';
import { useRouter } from 'next/router';
import { Button, Space, Table, Tag, Drawer } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { PostListItem } from '@model';

const { Column } = Table;

interface PostsTableProps {
    data: PostListItem[];
    page: number;
    totalCount: number;
    itemsPerPage: number;
}

export const PostsTable = (props: PostsTableProps) => {
    const { data, page, totalCount, itemsPerPage } = props;
    const { push, pathname, query } = useRouter();
    const [previewId, setPreviewId] = useState<string>();

    const paginationConfig = useMemo(() => ({
        current: page,
        total: totalCount,
        pageSize: itemsPerPage,
    }), [page, itemsPerPage, totalCount]);

    const handleClose = useCallback(() => {
        setPreviewId(undefined);
    }, []);

    const handleTableStateChange = useCallback((pagination, filters, sorter, extra) => {
        console.log(pagination);

        push({
            pathname,
            query: {
                ...query,
                page: pagination.current,
            }
        })
    }, [push, pathname, query]);

    return (
        <>
            <Drawer width={640} placement="right" closable={false} onClose={handleClose} open={Boolean(previewId)}>
                {previewId}
            </Drawer>
        
            <Table dataSource={data} rowKey="_id" pagination={paginationConfig} onChange={handleTableStateChange}>
                <Column title="Заголовок" dataIndex="title" key="title" />
                <Column title="Создано" dataIndex="createdAt" key="createdAt" />
                <Column
                    title="Tags"
                    dataIndex="tags"
                    key="tags"
                    render={(tags?: string[]) => (
                        <>
                            {tags?.map((tag) => (
                                <Tag color="blue" key={tag}>
                                    {tag}
                                </Tag>
                            ))}
                        </>
                    )}
                />
                <Column
                    title="Action"
                    key="action"
                    render={(_: any, record: PostListItem) => (
                        <Space size="middle">
                            <Button type="primary" shape="round" size="middle" onClick={() => setPreviewId(record._id)}>Preview</Button>
                            <Button type="primary" shape="round" icon={<DeleteOutlined />} size="middle" danger />
                        </Space>
                    )}
                />
            </Table> 
        </>
    );
}
