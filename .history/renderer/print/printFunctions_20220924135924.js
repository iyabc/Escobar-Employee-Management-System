import jsPDF from 'jspdf';
import 'jspdf-autotable';
import logo from '../public/images/logo.png';

export function printPdf(title, headCells, rows) {
    // console.log(title);
    const doc = new jsPDF();
    doc.text(`${logo} ${title}`, 20, 10);
    doc.autoTable({
        columns: headCells.map((item) => ({...item, dataKey: item.field})),
        body: rows,
    })

    doc.save(`${title}.pdf`);
}