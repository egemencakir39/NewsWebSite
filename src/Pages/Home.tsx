import React from 'react'
import NewsCard from '../components/NewsCard'
import NewsSlider from '../components/NewsSlider'
import NewsCardList from '../components/NewsCardList'

function Home() {
  return (
    <div>
      <NewsSlider /> 
      <NewsCardList />
    </div >
  )
}

export default Home