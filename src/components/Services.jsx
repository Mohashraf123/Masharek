import React from 'react'
import './Services.css'

import service1 from "../assets/service1.webp"
import service2 from "../assets/Statistical Analysis.png"
import service3 from "../assets/graduation.png"
import service4 from "../assets/Acadimic.webp"
import service5 from "../assets/researchs.jpg"
function Services() {
  return (
    <div className='Services'>
        <div className='title'>
            <h2>خدماتنا</h2>
        </div>

        <div className='content'>
            <div className='service'>
                <img src={service1} alt="" />
                <div className='servicecont'>
                <h2>إعداد الأبحاث والتقارير الأكاديمية</h2>
                <ul>
                    <li>كتابة أبحاث علمية في مختلف التخصصات وفق المعايير الأكاديمية.</li> 
                    <li>إعداد مقالات علمية قابلة للنشر في مجلات محكمة.</li>
                    <li>صياغة وتحرير التقارير والأوراق العلمية بدقة واحترافية.</li>
                </ul>

                </div>
                <a href="https://wa.me/9660509094365" target="_blank" className="contact">طلب الخدمة </a>
                
            </div>

            <div className='service'>
                <img src={service2} alt="" />
                <div className='servicecont'>
                    <h2>التحليل الإحصائي </h2>
                <ul>
                    <li>حليل البيانات باستخدام البرامج الإحصائية المتخصصة مثل SPSS، AMOS، STATA، وغيرها.</li> 
                    <li>تفسير النتائج الإحصائية وكتابتها بصياغة أكاديمية واضحة.</li>
                    <li>تصميم الاستبيانات وتحليل البيانات الميدانية.</li>
                </ul>

                </div>
                <a href="https://wa.me/9660509094365" target="_blank" className="contact">طلب الخدمة </a>
                
            </div>

            <div className='service'>
                <img src={service3} alt="" />
                <div className='servicecont'>
                <h2>تنفيذ مشاريع التخرج والدراسات العليا </h2>
                <ul>
                    <li>مساعدة الطلاب في اختيار مواضيع مشاريع التخرج.</li> 
                    <li>تنفيذ الدراسات الميدانية والتجارب العملية.</li>
                    <li>تقديم الدعم في كتابة الرسائل العلمية للماجستير والدكتوراه.</li>
                </ul>

                </div>
                <a href="https://wa.me/9660509094365" target="_blank" className="contact">طلب الخدمة </a>
               
            </div>

            <div className='service'>
                <img src={service4} alt="" />
                <div className='servicecont'>
                <h2>الشروحات الأكاديمية والتدريب </h2>
                <ul>
                    <li>تقديم شروحات تفصيلية للمناهج الدراسية في مختلف التخصصات.</li> 
                    <li>إعداد ملخصات ومراجعات للمقررات الجامعية.</li>
                    <li>دورات تدريبية في البحث العلمي وأساليب التحليل الإحصائي.</li>
                </ul>

                </div>
                <a href="https://wa.me/9660509094365" target="_blank" className="contact">طلب الخدمة </a>
               
            </div>

            <div className='service'>
                <img src={service5} alt="" />
                <div className='servicecont'>
                <h2>المساعدة في نشر الأبحاث العلمية </h2>
                <ul>
                    <li>تنسيق الأبحاث وفق متطلبات المجلات العلمية المحكمة.</li> 
                    <li>التدقيق اللغوي والمراجعة الأكاديمية للأبحاث.</li>
                    <li>تقديم استشارات حول اختيار المجلة المناسبة للنشر.</li>
                </ul>

                </div>
                <a href="https://wa.me/9660509094365" target="_blank" className="contact">طلب الخدمة </a>
                
            </div>
        </div>
      
    </div>
  )
}

export default Services
