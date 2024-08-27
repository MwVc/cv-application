import html2pdf from "html2pdf.js";

function generatePDF() {
  const element = document.querySelector(".page");
  const options = {
    margin: -0.1,
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
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  };
  html2pdf().set(options).from(element).save();
}

export default function DownloadPDF() {
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={generatePDF}
        style={{
          marginTop: "2rem",
        }}
      >
        Download CV
      </button>
    </div>
  );
}
