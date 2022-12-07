import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSumarryCard from '../../Shared/NewsSummaryCard/NewsSumarryCard';

const Catagory = () => {
    const catagoryNews = useLoaderData();
    return (
        <div>
            <h2>This is catagory has news:{catagoryNews.length}</h2>
            {
                catagoryNews.map(news => <NewsSumarryCard
                    key={news._id}
                    news={news}
                ></NewsSumarryCard>)
            }
        </div>
    );
};

export default Catagory;