import React from 'react'
import './features.css'
import {Feature} from '../../components'
import Cart from '../../assets/cartWhite.png'
import Class from '../../assets/classroomWhite.png'
import Lib from '../../assets/libraryWhite.png'
import Points from '../../assets/pointsWhite.png'
import Test from '../../assets/testWhite.png'
import Forum from '../../assets/forumWhite.png'

const FeaturesAr = () => {
  return (
    <div className="features-main-container section__padding section__margin">
        <div className="features-main-heading" style={{
              alignItems: "flex-start",
            }}>
            <h1 style={{
              fontFamily: "var(--font-family-arabic)",
            }}>خدماتنا</h1>
            <div className="divider"></div>
            <h2 style={{
              fontFamily: "var(--font-family-arabic)",
            }}>إشترك الآن للاستمتاع بكل هذه الخدمات وأكثر</h2>
        </div>
        <div className="features-container" style={{
              fontFamily: "var(--font-family-arabic)",
            }}>
            <Feature ar={true} img={Lib} text="مكتبة" subtext="لشراء ملفات لكل موادك" />
            <Feature ar={true} img={Class} text="حصص" subtext="أونلاين بالكامل لحضور وتدريس مختلف المواد" />
            <Feature ar={true} img={Cart} text="متجر" subtext="لبيع وشراء ملفات إضافية" />
            <Feature ar={true} img={Test} text="إختبارات" subtext="أونلاين بالكامل لتقييم مستوى الطلاب" />
            <Feature ar={true} img={Points} text="نظام نقاط" subtext="إشحن رصيد نقاطك لبيع وشراء المنتجات" />
            <Feature ar={true} img={Forum} text="مننتدى" subtext="للحوار مع باقي أعضاء المنصة" />
           
        </div>
    </div>
  )
}

export default FeaturesAr