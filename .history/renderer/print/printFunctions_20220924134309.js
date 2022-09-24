import jsPDF from 'jspdf';
import 'jspdf-autotable';

export function printPdf(title) {
    // console.log(title);
    const doc = new jsPDF();
    doc.text(title)
}