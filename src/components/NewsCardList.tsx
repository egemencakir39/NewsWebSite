import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store';
import { getNews } from '../redux/newsSlice';
import { CircularProgress, Box } from '@mui/material';
import NewsCard from './NewsCard';
import { Article } from '../types/type';

function NewsCardList() {
    const dispatch: AppDispatch = useDispatch();
    const { newsData, loading, error } = useSelector((state: RootState) => state.news)
    useEffect(() => {
        dispatch(getNews());
    }, [dispatch])
    return (
        <div>
            {loading ? (
                <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                    <CircularProgress size={60} />
                </Box>
            ) : (
                <>
                    <div className='flex-row' style={{ flexWrap: 'wrap', marginTop: "25px", display: 'flex', justifyContent: 'space-around' }}>
                        {newsData.map((news: Article, index: number) => (
                            <div key={news.url || index}>
                                <NewsCard news={news} />
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default NewsCardList