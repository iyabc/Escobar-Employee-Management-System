import jsPDF from 'jspdf';
import 'jspdf-autotable';
import logo from '../public/images/logo.png';

export function printPdf(title, headCells, rows) {
    // console.log(rows);
    const doc = new jsPDF();
    var img = new Image();
    img.src = '/images/logo.png';
    const totalPagesExp = doc.internal.getNumberOfPages();
    // var totalPagesExp = '{total_pages_count_string}';


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
        didDrawPage: function (data) {
            // Header
            doc.setFontSize(20)
            doc.setTextColor(40)
            doc.addImage(img, 'png', data.settings.margin.left, 15, 10, 10)
            doc.text(title, data.settings.margin.left + 15, 22)
      
            // Footer
            var str = 'Page ' + doc.internal.getNumberOfPages()
            // Total page number plugin only available in jspdf v1.0+
            if (typeof doc.putTotalPages === 'function') {
              str = str + ' of ' + totalPagesExp
            }
            doc.setFontSize(10)
      
            // jsPDF 1.4+ uses getWidth, <1.4 uses .width
            var pageSize = doc.internal.pageSize
            var pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight()
            doc.text(str, data.settings.margin.left, pageHeight - 10)
          },
          margin: { top: 30 },
    })

    doc.save(`${title}.pdf`);
}