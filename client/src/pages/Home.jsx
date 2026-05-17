import React from 'react'
import Hero from '../components/Hero'
import FeatureDestination from '../components/FeatureDestination'
import ExclusiveOffer from '../components/ExclusiveOffer'
import Testimonial from '../components/Testimonial'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import RecommendedHotel from '../components/RecommendedHotel'

const Home = () => {
  return (
    <>
      <Hero/>
      <RecommendedHotel/>
      <FeatureDestination/>
      <ExclusiveOffer/>
      <Testimonial/>
      <NewsLetter/>
      
    </>
  )
}

export default Home
