import React from "react";
import "./Common.css";

function CommonQuestions() {
  return (
    <div className="Common">
      <div className="title">
        <h2>الاسئلة الشائعة</h2>
      </div>

      <div className="content">
        {/* First row */}
        <div>
          <h2>هل توفرون المساعدة في جميع التخصصات؟</h2>
          <p>نعم، نقدم خدماتنا في مختلف التخصصات العلمية، الهندسية، الطبية، والعلوم الاجتماعية.</p>
        </div>

        <div>
          <h2>هل يمكنكم تنفيذ تحليل إحصائي متقدم؟</h2>
          <p>بالطبع، نستخدم أحدث البرامج الإحصائية ونوفر تحليلًا شاملاً للبيانات مع شرح مفصل للنتائج.</p>
        </div>

        {/* Centered question in second row */}
        <div className="centered">
          <h2>هل تضمنون قبول الأبحاث في المجلات العلمية؟</h2>
          <p>نحن نساعد في إعداد الأبحاث وفق متطلبات المجلات المحكمة، ولكن القبول النهائي يعتمد على سياسات كل مجلة.</p>
        </div>

        {/* Third row */}
        <div>
          <h2>كم تستغرق عملية إعداد البحث أو التحليل الإحصائي؟</h2>
          <p>يعتمد ذلك على طبيعة البحث ومتطلباته، ولكن نحرص على تقديم العمل في أقصر مدة ممكنة دون التأثير على الجودة.</p>
        </div>

        <div>
          <h2>كيف أضمن جودة العمل المقدم؟</h2>
          <p>نلتزم بالمعايير الأكاديمية العالمية، ويشرف على العمل فريق من المتخصصين لضمان الدقة والجودة العالية.</p>
        </div>
      </div>
    </div>
  );
}

export default CommonQuestions;