import React, {useEffect, useState} from 'react'
import {NavbarAr, FooterAr} from '../../sections'
import {useNavigate} from 'react-router-dom'
import {AdIconAr} from '../../components'
import './whoarwe.css'


const WhoArWeAr = ({isEnglish, setIsEnglish}) => {

  return (
      <>
        <NavbarAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
        <AdIconAr />
            <div className="store-container">
                <div className="store-heading">
                    <h1 style={{textAlign: "end", fontFamily: "var(--font-family-arabic)"}}>من نحن</h1>
                </div>
                <div className="divider" />
                

                <div className="whoarewe-container whoarwe-ar" style={{textAlign: "end"}}>
                    <h2>العلامة الكاملة هي واحدة من أكبر المنصات التعليمية في الشرق الأوسط، تعمل حاليًا في مصر وقطر</h2>
                    <h2>لدينا حاليًا العديد من المزايا التي تساعدك في رحلتك التعليمية سواء كنت طالب، ولي أمر، مدرس أو مؤسسة تعليمية</h2>
                    <div className="toc tocar">
                        <h2>المحتويات</h2>
                        <a href="#tou">أنواع المستخدمين</a>
                        <a href="#lesson">الدروس</a>
                        <a href="#store">المتجر</a>
                        <a href="#lib">المكتبة</a>
                        <a href="#cou">الدورات</a>
                        <a href="#for">المنتدى</a>
                        <a href="#tests">الاختبارات</a>
                        <a href="#howp">كيف يعمل رفع المنتجات</a>
                        <a href="#howb">كيف يعمل شراء المنتجات</a>
                        <a href="#points">النقاط</a>
                        <a href="#ads">الاعلانات</a>
                    </div>
                    <h1 id="tou">أنواع المستخدمين</h1>
                    <h3>طالب &#8226; </h3>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-end"}}>
                        <p>كطالب سيكون لديك القدرة على شراء الدروس، المنتجات من المتجر أو المكتبة، الدورات أو أخذ الاختبارات</p>
                        <p style={{marginLeft: "-20px"}}>&#8226; </p>
                    </div>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-end"}}>
                        <p>سيكون لديك القدرة على الدخول على صفحة المناهج، التي ستحتوي على كل المواد التي تدرسها في مرحلتك التعليمية الحالية، وكذلك كل المنتجات المتعلقة بمرحلتك التعليمية على حسب المادة التي ستقوم باختيارها </p>
                        <p style={{marginLeft: "-20px"}}>&#8226; </p>
                    </div>
                    <div style={{display: "flex", flexDirection: "row",justifyContent: "flex-end"}}>
                        <p>كل منتج ستشتريه أو اختبار ستأخذه، ستجده في لوحة التحكم الخاصة بك </p>
                        <p style={{marginLeft: "-20px"}}>&#8226; </p>
                    </div>
                    
                    <h3>ولي أمر &#8226; </h3>
                    <div style={{display: "flex", flexDirection: "row",justifyContent: "flex-end"}}>
                        <p>كولي أمر سيكون لديك القدرة على شراء الدروس، المنتجات من المتجر أو المكتبة، الدورات أو أخذ الاختبارات  </p>
                        <p style={{marginLeft: "-20px"}}>&#8226; </p>
                    </div>
                    <div style={{display: "flex", flexDirection: "row",justifyContent: "flex-end"}}>
                        <p>سيكون لديك القدرة على الدخول على صفحة المناهج، التي ستحتوي على كل المواد التي تدرسها في مرحلتك التعليمية الحالية، وكذلك كل المنتجات المتعلقة بمرحلتك التعليمية على حسب المادة التي ستقوم باختيارها  </p>
                        <p style={{marginLeft: "-20px"}}>&#8226; </p>
                    </div>
                    <div style={{display: "flex", flexDirection: "row",justifyContent: "flex-end"}}>
                        <p>كل منتج ستشتريه أو اختبار ستأخذه، ستجده في لوحة التحكم الخاصة بك </p>
                        <p style={{marginLeft: "-20px"}}>&#8226; </p>
                    </div>
                    <h3>مدرس &#8226; </h3>
                    <div style={{display: "flex", flexDirection: "row",justifyContent: "flex-end"}}>
                        <p>كمدرس، سيكون لديك القدرة على رفع الدروس، المنتجات على المتجر، الدورات، وكذلك إضافة الاختبارات وتصحيحها </p>
                        <p style={{marginLeft: "-20px"}}>&#8226; </p>
                    </div>
                    <div style={{display: "flex", flexDirection: "row",justifyContent: "flex-end"}}>
                        <p> سيكون لديك أيضًا القدرة على شراء الدروس، المنتجات من المتجر أو المكتبة، الدورات أو أخذ الاختبارات </p>
                        <p style={{marginLeft: "-20px"}}>&#8226; </p>
                    </div>
                    <div style={{display: "flex", flexDirection: "row",justifyContent: "flex-end"}}>
                        <p>كل منتج ستشتريه أو ترفعه ستجده في لوحة التحكم الخاصة بك </p>
                        <p style={{marginLeft: "-20px"}}>&#8226; </p>
                    </div>
                    <h3>مؤسسة تعليمية &#8226; </h3>
                    <div style={{display: "flex", flexDirection: "row",justifyContent: "flex-end"}}>
                        <p>كمؤسسة تعليمية، سيكون لديك القدرة على رفع الدروس، المنتجات على المتجر، الدورات، وكذلك إضافة الاختبارات وتصحيحها </p>
                        <p style={{marginLeft: "-20px"}}>&#8226; </p>
                    </div>
                    <div style={{display: "flex", flexDirection: "row",justifyContent: "flex-end"}}>
                        <p> سيكون لديك أيضًا القدرة على شراء الدروس، المنتجات من المتجر أو المكتبة، الدورات أو أخذ الاختبارات </p>
                        <p style={{marginLeft: "-20px"}}>&#8226; </p>
                    </div>
                    <div style={{display: "flex", flexDirection: "row",justifyContent: "flex-end"}}>
                        <p>كل منتج ستشتريه أو ترفعه ستجده في لوحة التحكم الخاصة بك </p>
                        <p style={{marginLeft: "-20px"}}>&#8226; </p>
                    </div>                    
                    <h1 id="lesson">الدروس</h1>
                    <h3>ما هي الدروس بالظبط؟</h3>
                    <div style={{display: "flex", flexDirection: "row",justifyContent: "flex-end"}}>
                        <p>الدروس هي منتجات ترفعها كمدرس أو مؤسسة، أو تشتريها، تحتوي على رابط ميتنج زووم أو غيره، وتاريخ وموعد محدد. وسيبدأ الدرس في الموعد المحدد </p>
                        <p style={{marginLeft: "-20px"}}>&#8226; </p>
                    </div>
                    <div style={{display: "flex", flexDirection: "row",justifyContent: "flex-end"}}>
                        <p>من سيرفع الدرس يوفر رابط الميتنج والسعر، ويكلفه رفع الدرس 20 نقطة</p>
                        <p style={{marginLeft: "-20px"}}>&#8226; </p>
                    </div>     
                    <div style={{display: "flex", flexDirection: "row",justifyContent: "flex-end"}}>
                        <p>عندما يشتري مستخدم الدرس، سعر الدرس يتم سحبه من رصيده، ويستقبل صاحب الدرس رصيد مساوي لهذه الكمية </p>
                        <p style={{marginLeft: "-20px"}}>&#8226; </p>
                    </div>                    
                    <h1 id="store">المتجر</h1>
                    <h3>ما هو المتجر تحديدًا؟</h3>
                    <div style={{display: "flex", flexDirection: "row",justifyContent: "flex-end"}}>
                        <p>المتجر هو صفحة خاصة تحتوى على منتجات إضافية ترفعها كمدرس أو مؤسسة تعليمية، أو تشتريها </p>
                        <p style={{marginLeft: "-20px"}}>&#8226; </p>
                    </div>    
                    <div style={{display: "flex", flexDirection: "row",justifyContent: "flex-end"}}>
                        <p>هذه المنتجات قد تكون فيديوها يوتيوب، أو ملفات من أي نوع مثل باوربوينت أو بي دي اف  </p>
                        <p style={{marginLeft: "-20px"}}>&#8226; </p>
                    </div>  
                    <div style={{display: "flex", flexDirection: "row",justifyContent: "flex-end"}}>
                        <p>من سيرفع المنتج يوفر رابط الفيديو أو الملف، سعد المنتج ويكلفه رفع منتج جديد 10 نقاط </p>
                        <p style={{marginLeft: "-20px"}}>&#8226; </p>
                    </div>  
                    <div style={{display: "flex", flexDirection: "row",justifyContent: "flex-end"}}>
                        <p>عندما يشتري مستخدم المنتج، سعر المنتج يتم سحبه من رصيده، ويستقبل صاحب المنتج رصيد مساوي لهذه الكمية </p>
                        <p style={{marginLeft: "-20px"}}>&#8226; </p>
                    </div>  
                    <div style={{display: "flex", flexDirection: "row",justifyContent: "flex-end"}}>
                        <p>المستخدمين الذين اشتروا هذا المنتج بامكانهم إضافة مراجعات أو تقييم</p>
                        <p style={{marginLeft: "-20px"}}>&#8226; </p>
                    </div>  
                    <h1 id="lib">المكتبة</h1>
                    <h3>ما هي المكتبة بالظبط؟</h3>
                    <div style={{display: "flex", flexDirection: "row",justifyContent: "flex-end"}}>
                        <p>المكتبة هي صفحة تحتوي على منتجات اضافية نوفرها نحن في العلامة الاملة بإمكان أي مستخدم شرائها </p>
                        <p style={{marginLeft: "-20px"}}>&#8226; </p>
                    </div>
                    <div style={{display: "flex", flexDirection: "row",justifyContent: "flex-end"}}>
                        <p>هذه المنتجات قد تكون فيديوهات يوتيوب أو ملفات من أي نوع مثل باوربوينت أو بي دي اف  </p>
                        <p style={{marginLeft: "-20px"}}>&#8226; </p>
                    </div>
                    <div style={{display: "flex", flexDirection: "row",justifyContent: "flex-end"}}>
                        <p>عندما يشتري مستخدم هذا المنتج، يتم سحب سعر المنتج  من رصيده</p>
                        <p style={{marginLeft: "-20px"}}>&#8226; </p>
                    </div>
                    <div style={{display: "flex", flexDirection: "row",justifyContent: "flex-end"}}>
                        <p>المستخدمين الذين اشتروا هذا المنتج بامكانهم إضافة مراجعات أو تقييم</p>
                        <p style={{marginLeft: "-20px"}}>&#8226; </p>
                    </div>
                    <h1 id="cou">الدورات</h1>
                    <h3>ما هي الدورات بالظبط؟</h3>
                    <div style={{display: "flex", flexDirection: "row",justifyContent: "flex-end"}}>
                        <p>الدورات هي منتجات خاصة بإمكانك رفعها كمدرس أو مؤسسة أو شرائها</p>
                        <p style={{marginLeft: "-20px"}}>&#8226; </p>
                    </div>
                    <div style={{display: "flex", flexDirection: "row",justifyContent: "flex-end"}}>
                        <p>كل دورة تحتوي على 5 دروس بحد أقصى، كل درس يحتوي على رابط فيديو يوتيوب أو ملف أو كليهما </p>
                        <p style={{marginLeft: "-20px"}}>&#8226; </p>
                    </div>
                    <div style={{display: "flex", flexDirection: "row",justifyContent: "flex-end"}}>
                        <p>من سيرفع الدورة يوفر روابط اليوتيوب أو الملفات وسعر الدورة، ويكلفه اضافة دورة جديدة 300 نقطة </p>
                        <p style={{marginLeft: "-20px"}}>&#8226; </p>
                    </div>
                    <div style={{display: "flex", flexDirection: "row",justifyContent: "flex-end"}}>
                        <p>عندما يشتري مستخدم الدورة سعر الدورة يتم سحبه من رصيده، ويستقبل صاحب الدورة رصيد مساوي لهذه الكمية </p>
                        <p style={{marginLeft: "-20px"}}>&#8226; </p>
                    </div>
                    <div style={{display: "flex", flexDirection: "row",justifyContent: "flex-end"}}>
                        <p>المستخدمين الذين اشتروا هذه الدورة بامكانهم إضافة مراجعات أو تقييم </p>
                        <p style={{marginLeft: "-20px"}}>&#8226; </p>
                    </div>
                    <h1 id="for">المنتدى</h1>
                    <h3>ماهو المنتدى بالظبط؟</h3>
                    <div style={{display: "flex", flexDirection: "row",justifyContent: "flex-end"}}>
                        <p>المنتدى هو صفحة خاصة حيث يمكن للمستخدمين التواصل عن طريق كتابة منشورات واضافة تعليقات</p>
                        <p style={{marginLeft: "-20px"}}>&#8226; </p>
                    </div>
                    <div style={{display: "flex", flexDirection: "row",justifyContent: "flex-end"}}>
                        <p>التعاملات على المنتدى كلها مجانية </p>
                        <p style={{marginLeft: "-20px"}}>&#8226; </p>
                    </div>
                    <h1 id="tests">الاختبارات</h1>
                    <h3>ماهي الاختبارات بالظبط؟</h3>
                    <div style={{display: "flex", flexDirection: "row",justifyContent: "flex-end"}}>
                        <p>الاختبارات هي منتجات خاصة ترفعها كمدرس أو مؤسسة أو تأخذها </p>
                        <p style={{marginLeft: "-20px"}}>&#8226; </p>
                    </div>
                    <div style={{display: "flex", flexDirection: "row",justifyContent: "flex-end"}}>
                        <p>أي اختبار يمكنه الاحتواء على أي عدد من الأسئلة، الأسئلة قد تكون اختيار من متعدد، صواب أم خطأ، اختر الغريب، بم تفسر، أكمل أو مقال </p>
                        <p style={{marginLeft: "-20px"}}>&#8226; </p>
                    </div>
                    <div style={{display: "flex", flexDirection: "row",justifyContent: "flex-end"}}>
                        <p>من سيرفع الاختبار يوفر الأسئلة والأجوبة  </p>
                        <p style={{marginLeft: "-20px"}}>&#8226; </p>
                    </div>
                    <div style={{display: "flex", flexDirection: "row",justifyContent: "flex-end"}}>
                        <p>كل اختبار مجاني سواء في الرفع أو في الحل  </p>
                        <p style={{marginLeft: "-20px"}}>&#8226; </p>
                    </div>
                    <h1 id="howp">كيف يعمل رفع المنتجات؟</h1>
                    <p>عندما تقوم برفع منتج، لن يتم وضعه على المنصة مباشرة ولن يقل رصيدك. ستتم مراجعته أولا بواسطتنا في العلامة الكاملة وإذا تم الموافقة عليه سيتم رفعه وحينها سيتم خصم النقاط المطلوبة من رصيدك </p>
                    <h1 id="howb">كيف يعمل شراء المتجات</h1>
                    <p>عندما تقوم بشراء منتج، سعر المنتج سيتم نقله مباشرة من رصيدك لرصيد صاحب المنتج، وسيتم إضافة المنتج لحسابك مباشرة</p>
                    <h1 id="points">النقاط</h1>
                    <div style={{display: "flex", flexDirection: "row",justifyContent: "flex-end"}}>
                        <p>نقاط المستخدم هي عملة هذه المنصة، تستخدمهم رفع وشراء المنتجات. كل 10 نقاط سعرهم يساوي دولار أمريكي واحد </p>
                        <p style={{marginLeft: "-20px"}}>&#8226; </p>
                    </div>
                    <div style={{display: "flex", flexDirection: "row",justifyContent: "flex-end"}}>
                        <p>كجائزى تسجيل حساب جديد، سيتم إضافة نقاط بقيمة  15 دولار أمريكي مباشرة إلى حسابك لتستخدمهم على المنصة</p>
                        <p style={{marginLeft: "-20px"}}>&#8226; </p>
                    </div>
                    <div style={{display: "flex", flexDirection: "row",justifyContent: "flex-end"}}>
                        <p>بما أن ال 15 دولار بإمكانك استخدامهم فقط على المنصة، عنما تطلب سحب رصيدك لا بد من أن يتفضل لديك 150 نقط في حسابك ولا يمكن أن يقل رصيدك عن هذا الرقم عند السحب </p>
                        <p style={{marginLeft: "-20px"}}>&#8226; </p>
                    </div>
                    <h3>كيف أشحن أو أسحب الرصيد</h3>
                    <h3> الشحن &#8226;</h3>
                    <div style={{display: "flex", flexDirection: "row",justifyContent: "flex-end"}}>
                        <p>لتشحن رصيدك، اذهب إلى صفحة نقاطي، لترى منطقة اشحن رصيدك حيث سترى معلومات تحويل النقود لنا لتحويلها إلى نقاط سواء عن طريق بايبال أو أورانج كاش </p>
                        <p style={{marginLeft: "-20px"}}>&#8226; </p>
                    </div>
                    <div style={{display: "flex", flexDirection: "row",justifyContent: "flex-end"}}>
                        <p>عندما تدخل الرصيد المطلوب وإثبات عملية الدفع (صورة رسالة التأكيد للتعامل المالي) سيتم إرسال طلب إلينا وعندما تتم مراعته سيتم شحن رصيدك بالكمية المضبوطة </p>
                        <p style={{marginLeft: "-20px"}}>&#8226; </p>
                    </div>
                    <h3> السحب &#8226;</h3>
                    <div style={{display: "flex", flexDirection: "row",justifyContent: "flex-end"}}>
                        <p>لتسحب رصيدك، اذهب إلى صفحة نقاطي، لترى منطقة اسحب رصيدك حيث سيكون بإمكانك ادخال معلومات تحويل النقود سواء عن طريق بايبال أو أورانج كاش </p>
                        <p style={{marginLeft: "-20px"}}>&#8226; </p>
                    </div>
                    <div style={{display: "flex", flexDirection: "row",justifyContent: "flex-end"}}>
                        <p>عندما يتم ارسال الطلب، ستتم مراجعته بواسطتنا وإذا تمت الموافقة، سيتم استكمال التحويل وسيتم تحويل المبلغ المالي إلى عنوان الدفع الذي أرسلته</p>
                        <p style={{marginLeft: "-20px"}}>&#8226; </p>
                    </div>
                    <h1 id="ads">الاعلانات</h1>
                    <h3>ربما قد تكون لاحظت أيقونة الإعلانات النابضة أسفل الشاشة، ما هذه الأيقونة إذن؟</h3>
                    <div style={{display: "flex", flexDirection: "row",justifyContent: "flex-end"}}>
                        <p> أيقونة الإعلانات هي أيقونة حاضرة دائمًا على موقع المنصة حيث بإمكان المستخدمين نشر الإعلانات </p>
                        <p style={{marginLeft: "-20px"}}>&#8226; </p>
                    </div>
                    <div style={{display: "flex", flexDirection: "row",justifyContent: "flex-end"}}>
                        <p> بإمكانك طلب رفع إعلان بغض النظر عن نوع حسابك </p>
                        <p style={{marginLeft: "-20px"}}>&#8226; </p>
                    </div>
                    <div style={{display: "flex", flexDirection: "row",justifyContent: "flex-end"}}>
                        <p> ستظل الإعلانات ظاهرة لمدة 3 أيام أو اسبوع أو شهر حسب اختيارك</p>
                        <p style={{marginLeft: "-20px"}}>&#8226; </p>
                    </div>
                    <div style={{display: "flex", flexDirection: "row",justifyContent: "flex-end"}}>
                        <p> إذا اخترت 3 أيام، سيكلفك الاعلان 25 نقطة  </p>
                        <p style={{marginLeft: "-20px"}}>&#8226; </p>
                    </div>
                    <div style={{display: "flex", flexDirection: "row",justifyContent: "flex-end"}}>
                        <p> إذا اخترت اسبوع، سيكلفك الاعلان 50 نقطة </p>
                        <p style={{marginLeft: "-20px"}}>&#8226; </p>
                    </div>
                    <div style={{display: "flex", flexDirection: "row",justifyContent: "flex-end"}}>
                        <p> إذا اخترت شهر سيكلفك الاعلان 150 نقطة </p>
                        <p style={{marginLeft: "-20px"}}>&#8226; </p>
                    </div>
                    <h3>إذا كان لديك أي أسئلة أو استفسارات أخرى، برجاء مراسلتنا على البريد الالكتروني</h3>
                    <h3>alalamahalkamla@gmail.com</h3>
                    <h3>أو على أي من حسابات التواصل الاجتماعي خاصتنا</h3>
                </div>
            </div>
            
        <FooterAr />
      </>
  )
}

export default WhoArWeAr