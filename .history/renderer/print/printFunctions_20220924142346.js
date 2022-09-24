import jsPDF from 'jspdf';
import 'jspdf-autotable';
import logo from '../public/images/logo.png';

export function printPdf(title, headCells, rows) {
    // console.log(rows);
    const doc = new jsPDF();

    var img = new Image(); //this mount a variable to img
    img.src = '/images/logo.png' //asign the src to the img variable
    var offsetY = 4.797777777777778; //var offsetY is for spacing
    var lineHeight = 6.49111111111111; //var lineHeight is for Spacing

    // doc.text(title, 20, 10);
    doc.autoTable({
        theme: 'striped',
        styles : { halign : 'center' },
        columns: headCells.map((item) => ({header: item.headerName, dataKey: item.field})),
        body: rows
    })

    doc.save(`${title}.pdf`);
}