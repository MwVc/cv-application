import { html2pdf } from "html2pdf.js";

function generatePDF() {
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

  html2pdf().set(pdfOptions).from(element).save();
}

export default function DownloadPDF() {
  return (
    <div>
      <button className="btn btn-primary" onClick={generatePDF}>
        Download CV
      </button>
    </div>
  );
}
