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
    var sectionElement = document.getElementById(doc.section);
    if (sectionElement) {
        var card = "\n            <div class=\"col-md-4\">\n                <a href=\"details.html?title=".concat(encodeURIComponent(doc.title), "&file=").concat(encodeURIComponent(doc.file), "\" class=\"text-decoration-none\">\n                    <div class=\"card p-4 shadow-sm\">\n                        <h5 class=\"card-title\">").concat(doc.title, "</h5>\n                        <p class=\"card-body\">\u0627\u0636\u063A\u0637 \u0647\u0646\u0627 \u0644\u0639\u0631\u0636 \u0627\u0644\u0648\u062B\u064A\u0642\u0629</p>\n                    </div>\n                </a>\n            </div>\n        ");
        sectionElement.innerHTML += card;
    }
});
