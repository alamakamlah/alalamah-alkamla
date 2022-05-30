import React from 'react'
import Bg from '../../assets/background2.png'
import './whyus.css'

const WhyusAr = () => {
  return (
    <div className="whyus-container page__padding">
        <div className="whyus-heading">
            <img src={Bg} alt="why us" />
            <h1 style={{fontFamily: "var(--font-family-arabic)"}}>لماذا نحن؟</h1>
        </div>
        <div className="whyus-content">
            <ul style={{listStyleType: "none"}}>
                <li style={{fontFamily: "var(--font-family-arabic)", textAlign: "end"}}>  أكبر منصة تعليمية في الشرق الأوسط   </li>
                <li style={{fontFamily: "var(--font-family-arabic)", textAlign: "end"}}> بإمكانك الانضمام كمدرس، طالب، ولي أمر أو مؤسسة تعليمية </li>
                <li style={{fontFamily: "var(--font-family-arabic)", textAlign: "end"}}>نظام شراء بسيط، إشحن رصيدك من النقاط ثم استخدم هذه النقاط لبيع وشراء المنتجات  </li>
                <li style={{fontFamily: "var(--font-family-arabic)", textAlign: "end"}}>بإمكانك التسويق لنفسك كمدرس، اعرض وبع مختلف المنتجات كالكتب الإلكترونية، فيديوهات أو دروس أونلاين </li>
                <li style={{fontFamily: "var(--font-family-arabic)", textAlign: "end"}}>كطالب، بإمكانك اختيار مدرسك، المنتج الذي تود شرائه، وأي دروس تحضرها، كل هذا في مكان واحد</li>
                <li style={{fontFamily: "var(--font-family-arabic)", textAlign: "end"}}>نوفر حسابات المؤسسات التعليمية، التي بإمكانها امتلاك أكثر من مدرس وتتخصص في أكثر من مادة </li>
                <li style={{fontFamily: "var(--font-family-arabic)", textAlign: "end"}}>يمكنك أيضًا الانضمام كول أمر، لتكون وسيطًا بين ابنك وبين المدرسين   </li>
                <li style={{fontFamily: "var(--font-family-arabic)", textAlign: "end"}}> يمكنك الإعلان عن منتجك من خلال <a> أيقونة الإعلانات</a>  </li>
                <li style={{fontFamily: "var(--font-family-arabic)", textAlign: "end"}}>كما يمكنك الإنضمام للمنتدى لكتابة المنشورات والتفاعل مع باقي أعضاء المنصة  </li>
                <li style={{fontFamily: "var(--font-family-arabic)", textAlign: "end"}}><a>اعرف المزيد</a></li>
            </ul>
        </div>
    </div>
  )
}

export default WhyusAr