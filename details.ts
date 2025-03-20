// استخراج القيم من الـ URL
const params = new URLSearchParams(window.location.search);
const title = params.get("title");
const file = params.get("file");

// التأكد من أن العناصر موجودة قبل التعديل عليها
const docTitle = document.getElementById("docTitle") as HTMLHeadingElement;
const docLink = document.getElementById("docLink") as HTMLAnchorElement;
const docPreview = document.getElementById("docPreview") as HTMLIFrameElement;

if (title && file) {
    docTitle.textContent = decodeURIComponent(title);
    docLink.href = decodeURIComponent(file);
    docPreview.src = decodeURIComponent(file);
}
