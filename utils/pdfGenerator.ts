import PDFDocument from 'pdfkit';

    export function generatePDF(analysisResult: string) {
      const doc = new PDFDocument();
      doc.text('Chat Analysis Report', { align: 'center' });
      doc.moveDown();
      doc.text(analysisResult);
      doc.end();
      return doc;
    }
