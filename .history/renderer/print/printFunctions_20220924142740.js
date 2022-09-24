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

    var header = function(data) {
        doc.setFontSize(18);
        doc.setTextColor(40);
        doc.setFontStyle('normal');
        //doc.addImage(headerImgData, 'JPEG', data.settings.margin.left, 20, 50, 50);
        doc.text("Testing Report", data.settings.margin.left, 50);
      };

    var options = {
        beforePageContent: header,
        margin: {
          top: 80
        },
        startY: doc.autoTableEndPosY() + 20
      };

    doc.autoTable({
        theme: 'striped',
        styles : { halign : 'center' },
        columns: headCells.map((item) => ({header: item.headerName, dataKey: item.field})),
        body: rows,
        options
    })

    doc.save(`${title}.pdf`);
}