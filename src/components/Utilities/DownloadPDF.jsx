import { html2pdf } from "html2pdf.js";

export default function DownloadPDF() {
  const element = document.querySelector(".page");
  const pdfOptions = {
    margin: -7,
    filename: "my-cv.pdf",
    image: {
      type: "jpeg",
      quality: 1,
    },
    html2canvas: {
      scale: 4,
      dpi: 300,
      letterRendering: true,
      useCORS: true,
    },
    jsPDF: { unit: "mm", format: "a4", oreintation: "potrait" },
  };
  return (
    <div>
      <button>Download CV</button>
    </div>
  );
}
