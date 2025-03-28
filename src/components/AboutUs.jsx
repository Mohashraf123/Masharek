import React from "react";
import "./AboutUs.css";
import aboutus1 from "../assets/aboutus1.jpg"
import aboutus2 from "../assets/aboutus2.jpg"


function AboutUs() {
  return (
    <div className="AboutUs" id="aboutus">
      <div className="title">
        <h2>من نحن</h2>
      </div>

      <div className="aboutuscont">
        <img src={aboutus2} alt="" className="aboutimg1" />

        <div>
          <h1>منصة مشارق :</h1>
          <p>
            هى منصة متخصصة في تقديم الخدمات الأكاديمية والبحثية للطلاب والباحثين
            في مختلف التخصصات العلمية والهندسية والاجتماعية. نعمل على تقديم حلول
            متكاملة لدعم الطلاب في إعداد الأبحاث والشروحات العلمية، التحليل
            الإحصائي، وتنفيذ مشاريع التخرج والدراسات العليا (الماجستير
            والدكتوراه)، بالإضافة إلى المساعدة في نشر الأبحاث العلمية في مجلات
            محكمة.
          </p>

          <p>
            نعتمد على فريق من الخبراء الأكاديميين والاستشاريين المتخصصين في
            مجالات متنوعة، مما يضمن تقديم محتوى علمي دقيق ومتوافق مع المعايير
            الأكاديمية المعتمدة. هدفنا هو مساعدة الباحثين على تحقيق التميز
            العلمي من خلال توفير الدعم الشامل في جميع مراحل البحث والدراسة.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
