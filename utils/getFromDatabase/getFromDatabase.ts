export const getFromDatabase = (method: string, requestData: Record<string, string> = {}) => {
    return fetch(`https://data.mongodb-api.com/app/data-ujnru/endpoint/data/v1/action/${method}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Access-Control-Request-Headers': '*',
            'api-key': process.env.MONGO_DATA_API_KEY || '',
        },
        body: JSON.stringify({
            collection: "posts",
            database: process.env.MONGO_DATA_DB_NAME,
            dataSource: process.env.MONGO_DATA_DB_SOURCE,
            ...requestData,
        }),
      });
  }
  