"use strict";
try {
    const params = new URLSearchParams(window.location.search);
    const title = decodeURIComponent(params.get("title"));
    const file = decodeURIComponent(params.get("file"));

    const docTitle = document.getElementById("docTitle");
    const docLink = document.getElementById("docLink");
    const docPreview = document.getElementById("docPreview");

    if (title && file) {
        docTitle.textContent = title;
        docLink.href = file;
        docPreview.src = file;

        // جلب البيانات من الـ API
        fetch("https://mocki.io/v1/bc29e50d-cbd2-4941-964d-9dbcc67abbd3")
            .then(res => res.json())
            .then(data => {
                const filteredData = data.filter(doc => doc.department !== "إدارة تقنية المعلومات");
                
                const info = filteredData.find(doc => doc.title === title);
                
                if (info) {
                    const infoBox = document.createElement("div");
                    infoBox.className = "text-start mt-4";
                    infoBox.innerHTML = `
                        <hr>
                        <p><strong>الجهة المسؤولة:</strong> ${info.department}</p>
                        <p><strong>تاريخ الإصدار:</strong> ${info.date}</p>
                        <p><strong>الوصف:</strong> ${info.description}</p>
                    `;
                    document.querySelector(".card").appendChild(infoBox);
                }
            })
            .catch(error => {
                console.error("فشل في جلب بيانات الوثائق:", error);
            });
    }
} catch (error) {
    console.error("حدث خطأ أثناء عرض الوثيقة:", error);
}



