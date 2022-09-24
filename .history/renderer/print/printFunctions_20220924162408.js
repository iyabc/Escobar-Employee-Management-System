import jsPDF from 'jspdf';
import 'jspdf-autotable';
import logo from '../public/images/logo.png';

export function printPdf(title, headCells, rows) {
    // console.log(rows);
    const doc = new jsPDF();
    var img = new Image();
    img.src = '/images/logo.png';
    var totalPagesExp = '{total_pages_count_string}'

    doc.autoTable({
        columns: headCells.map((item) => ({header: item.headerName, dataKey: item.field})),
        body: rows,
        didDrawPage: function (data) {
        // Header
        doc.addImage(img, 'png', data.settings.margin.left, 15, 15, 15)
        doc.text('Escobar', data.settings.margin.left + 18, 22).
            setFontSize(10).
            setTextColor(10).
            setFont(Arial, 'bold');
        doc.text(title, data.settings.margin.left + 18, 26)

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
        margin: { top: 35 },
    })

    // Total page number plugin only available in jspdf v1.0+
    if (typeof doc.putTotalPages === 'function') {
        doc.putTotalPages(totalPagesExp)
    }

    doc.save(`${title}.pdf`);
}