import React from 'react'
import { Article } from '../types/type';
import '../css/newsCard.css'

interface NewsCardProps {
    news: Article;
}
function NewsCard({ news }: NewsCardProps) {
    if (!news) return null;

    const { title, urlToImage, description } = news;
    return (
        <div className='container'>
            <span>
                <div className='Image'>
                    <img src={urlToImage} alt="PNG not found" />
                </div>
                <div className='title'>
                    {title}
                </div>

            </span>

        </div>
    )
}

export default NewsCard