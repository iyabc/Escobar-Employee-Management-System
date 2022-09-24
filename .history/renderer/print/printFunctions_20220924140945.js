import jsPDF from 'jspdf';
import 'jspdf-autotable';

export function printPdf(title, headCells, rows) {
    // console.log(headCells);
    // const doc = new jsPDF();
    // doc.text(title, 20, 10);
    // doc.autoTable({
    //     theme: 'grid',
    //     columns: headCells.map((item) => ({...item, dataKey: item.headerName})),
    //     body: rows
    // })

    // doc.save(`${title}.pdf`);
}