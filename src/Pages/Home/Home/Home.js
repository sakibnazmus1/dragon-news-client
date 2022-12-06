import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSumarryCard from '../../Shared/NewsSummaryCard/NewsSumarryCard';

const Home = () => {
    const allNews = useLoaderData();
    return (
        <div>
            <h2>Dragon News Home: {allNews.length}</h2>
            {
                allNews.map(news => <NewsSumarryCard
                    key={news._id}
                    news={news}
                ></NewsSumarryCard>)
            }
        </div>
    );
};

export default Home;