"use strict";
var documents = [
    { title: "لائحة تنظيم العمل", file: "documents/work_policy.pdf", section: "section1" },
    { title: "سياسة العمل عن بُعد", file: "documents/remote_work_policy.pdf", section: "section1" },
    { title: "دليل الموظفين", file: "documents/employee_guide.pdf", section: "section1" },
    { title: "تقرير الأداء السنوي", file: "documents/annual_report.pdf", section: "section2" },
    { title: "تقرير مبيعات الربع الأول", file: "documents/q1_sales_report.pdf", section: "section2" },
    { title: "تحليل الأداء للعام الماضي", file: "documents/last_year_performance_analysis.pdf", section: "section2" },
    { title: "عقد الشراكة", file: "documents/partnership_contract.pdf", section: "section3" },
    { title: "خطة المشاريع المستقبلية", file: "documents/future_project_plan.pdf", section: "section3" },
    { title: "اتفاقية التعاون بين الشركات", file: "documents/corporate_collaboration_agreement.pdf", section: "section3" }
];

documents.forEach(function (doc) {
    try {
        var sectionElement = document.getElementById(doc.section);

        if (!sectionElement) {
            throw new Error("القسم غير موجود: " + doc.section);
        }
        var card = `
            <div class="col-md-4">
                <a href="details.html?title=${encodeURIComponent(doc.title)}&file=${encodeURIComponent(doc.file)}" class="text-decoration-none">
                    <div class="card p-4 shadow-sm">
                        <h5 class="card-title">${doc.title}</h5>
                        <p class="card-body">اضغط هنا لعرض الوثيقة</p>
                    </div>
                </a>
            </div>
        `;

        sectionElement.innerHTML += card;
    } catch (error) {
        console.error("حدث خطأ أثناء عرض الوثيقة:", doc.title, error.message);
    }
});

