import jsPDF from 'jspdf';
import 'jspdf-autotable';

export function printPdf(title, headCells, rows) {
    // console.log(title);
    const doc = new jsPDF();
    doc.text(title, 10, 10);
    doc.autoTable({
        columns: headCells.map((item) => ({...item, dataKey: item.field})),
        body: rows,
    })

    doc.save(`${title}.pdf`);
}