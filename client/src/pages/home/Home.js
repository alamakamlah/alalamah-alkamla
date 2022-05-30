import React from 'react'
import {Navbar, Heading, CTA, Features, Footer, Whyus} from '../../sections'
import { CTAbtn, AdIcon } from '../../components'
import './home.css'
import BgIcon from '../../assets/background2.png'


const Home = ({isEnglish, setIsEnglish}) => {


  return (
    <>
      <Navbar isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
      <AdIcon />
      <Heading />
      <CTA />
      <Features />
      <Whyus />
      <CTAbtn />
      <Footer />
    </>
  )
}

export default Home