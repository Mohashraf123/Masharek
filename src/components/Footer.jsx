import React from 'react'
import './Footer.css'
import Logo from'../assets/Logo.png'
import twitter from'../assets/twitterx.png'
import whatsapp from'../assets/whatsapp.png'

function Footer() {
  return (
    <div className='Footer' id='contact'>
     <div className='about'>
        <h2 className='title'>عن مشارق</h2>
        <p>منصة متخصصة في تقديم الخدمات الأكاديمية والبحثية للطلاب والباحثين في مختلف التخصصات العلمية والهندسية والاجتماعية. نعمل على تقديم حلول متكاملة لدعم الطلاب في إعداد الأبحاث والشروحات العلمية، التحليل الإحصائي، وتنفيذ مشاريع التخرج والدراسات العليا (الماجستير والدكتوراه)، بالإضافة إلى المساعدة في نشر الأبحاث العلمية في مجلات محكمة.
</p>

     </div>

     <div className='logo'>
        <img src={Logo} alt="" />

        

     </div>

     <div className='social'>
        <h2 className='title'>وسائل التواصل</h2>
       <div>
       <a href="https://x.com/darreen2019?s=11" target="_blank"><img src={twitter} alt="" /></a>
       <a href="https://wa.me/9660509094365" target="_blank"><img src={whatsapp} alt="" /></a>

       </div>
     



     </div>
    </div>
  )
}

export default Footer
