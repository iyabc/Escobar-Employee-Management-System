import jsPDF from 'jspdf';
import 'jspdf-autotable';
import logo from '../public/images/logo.png';

export function printPdf(title, headCells, rows) {
    // console.log(rows);
    const doc = new jsPDF();
    doc.addImage(logo, 'png', 100, doc.autoTable.previous.finalY + lineHeight * 1.5 + offsetY, 20, 20)
    doc.text(title, 20, 10);
    doc.autoTable({
        theme: 'striped',
        styles : { halign : 'center' },
        columns: headCells.map((item) => ({header: item.headerName, dataKey: item.field})),
        body: rows
    })

    doc.save(`${title}.pdf`);
}