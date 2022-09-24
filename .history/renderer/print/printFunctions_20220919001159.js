const fs = require('fs');
const pdf = require('pdf-creator-node');
const path = require('path');

const generatePdf = async (req, res, next) => {
    const html = fs.readFileSync(path.join(_dirname, '../views/remplate.html'), 'utf-8');
}