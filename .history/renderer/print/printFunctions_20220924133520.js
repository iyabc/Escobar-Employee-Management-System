import jsPDF from 'jspdf';
import 'jspdf-autotable';

export function printPdf() {
    // console.log('print');
    const doc = new jsPDF();
    doc.text("Attendance Data")
}