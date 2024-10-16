import html2pdf from "html2pdf.js";

function generatePDF() {
  const element = document.querySelector(".page");
  const opt = {
    margin: -0.0017,
    filename: "myfile.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
  };

  html2pdf().set(opt).from(element).save();
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
