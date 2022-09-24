import jsPDF from 'jspdf';
import 'jspdf-autotable';

export function printPdf(title, headCells, rows) {
    // console.log(rows);
    const doc = new jsPDF();
    doc.text(title, 20, 10);
    doc.autoTable({
        theme: 'striped',
        styles : { halign : 'center', fontSize: 10},
        columns: headCells.map((item) => ({header: item.headerName, dataKey: item.field})),
        body: rows
    })

    doc.save(`${title}.pdf`);
}