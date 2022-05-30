import React from 'react'
import {NavbarAr, FooterAr, HeadingAr, CTAAR, FeaturesAr, WhyusAr} from '../../sections'
import { CTAbtnAr, AdIconAr } from '../../components'


const HomeAr = ({isEnglish, setIsEnglish}) => {
  return (
    <>
      <NavbarAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
      <AdIconAr />
      <HeadingAr />
      <CTAAR />
      <FeaturesAr />
      <WhyusAr />
      <CTAbtnAr />
      <FooterAr />
    </>
  )
}

export default HomeAr