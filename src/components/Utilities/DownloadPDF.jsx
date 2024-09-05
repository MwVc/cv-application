import { jsPDF } from "jspdf";

function generatePDF() {
  const element = document.querySelector(".page");
}

function DownloadPDF() {
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
