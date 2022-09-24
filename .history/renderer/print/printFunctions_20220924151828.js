import jsPDF from 'jspdf';
import 'jspdf-autotable';
import logo from '../public/images/logo.png';

export function printPdf(title, headCells, rows) {
    console.log(rows);
    const doc = new jsPDF();

    var img = new Image();
    img.src = '/images/logo.png';
    // doc.text(title, 20, 10);

    function header(data) {
        doc.addImage(img, 'png', data.settings.margin.left, 20, 50, 50);
        // doc.text("Testing Report", data.settings.margin.left, 50);
    };

    function footer(){ 
        doc.text(150,285, 'page ' + doc.page); //print number bottom right
        doc.page ++;
    };
    

    doc.autoTable({
        theme: 'striped',
        styles : { halign : 'center' },
        headStyles: { color: 'red' },
        columns: headCells.map((item) => ({header: item.headerName, dataKey: item.field})),
        body: rows,
        didDrawPage: (data) => {
            var base64Img = 'data:image/jpeg;base64,iVBORw0KGgoAAAANS...'
            doc.addImage(base64Img, 'JPEG', data.cell + 2, data.cell + 2, 10, 10)
        }
    })

    doc.save(`${title}.pdf`);
}