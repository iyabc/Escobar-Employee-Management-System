import jsPDF from 'jspdf';
import 'jspdf-autotable';
import logo from '../public/images/logo.png';

export function printPdf(title, headCells, rows) {
    // console.log(rows);
    const doc = new jsPDF();

    var img = new Image();
    img.src = '/images/logo.png';
    // doc.text(title, 20, 10);

    var header = function(data) {
        doc.addImage(img, 'png', data.settings.margin.left, 20, 50, 50);
        // doc.text("Testing Report", data.settings.margin.left, 50);
      };

    doc.autoTable({
        beforePageContent: header,
        theme: 'striped',
        styles : { halign : 'center' },
        headStyles: { color: 'red' },
        columns: headCells.map((item) => ({header: item.headerName, dataKey: item.field})),
        body: rows
    })

    doc.save(`${title}.pdf`);
}