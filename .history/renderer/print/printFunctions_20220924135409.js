import jsPDF from 'jspdf';
import 'jspdf-autotable';

export function printPdf(title, headCells, rows) {
    // console.log(title);
    const doc = new jsPDF();
    doc.text(title, 20, 10);
    doc.autoTable({
        columnStyles: { 0: { halign: 'center', fillColor: [0, 255, 0] } }, // Cells in first column centered and green
        padding: { top: 10 },
        columns: headCells.map((item) => ({...item, dataKey: item.field})),
        body: rows
    })

    doc.save(`${title}.pdf`);
}