import { GetServerSideProps } from 'next';
import { getFromDatabase } from '@utils';
import { PostListItem } from '@model';
import { PostsTable } from '@components';

const ITEMS_PER_PAGE = 5;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const page = Number.isNaN(Number(query.page)) ? 1 : Number(query.page);

  const res = await getFromDatabase('aggregate', {
    pipeline: [
      {
        '$facet': {
          items: [
            {
              $sort: {
                createdAt : -1
              }
            },
            {
              '$project': {
                title: 1,
                intro: 1,
                picture: 1,
                createdAt: 1,
              }
            },
            {
              '$skip': (page - 1) * ITEMS_PER_PAGE,
            },
            {
              '$limit': ITEMS_PER_PAGE,
            },
          ],
          total: [
            {
              '$count': 'count',
            },
          ],
        }
      }
    ],
  });

  const data = await res.json();

  return {
    props: {
      data: data.documents[0].items,
      page,
      totalCount: data.documents[0].total[0].count,
      itemsPerPage: ITEMS_PER_PAGE,
    },
  }
}


interface PostsProps {
  data: PostListItem[];
  page: number;
  totalCount: number;
  itemsPerPage: number;
}

export default function Posts ({ data, page, totalCount, itemsPerPage }: PostsProps) {
    return (
      <PostsTable data={data} page={page} totalCount={totalCount} itemsPerPage={itemsPerPage} />  
    );
}
