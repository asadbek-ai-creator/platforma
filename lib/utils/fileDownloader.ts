export const downloadLessonAsHTML = (content: string) => {
  const printContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>4+1 Formula Dars Rejasi</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          padding: 20px;
          line-height: 1.6;
          max-width: 1200px;
          margin: 0 auto;
        }
        h1, h2, h3, h4, h5 {
          color: #2c3e50;
          margin-top: 20px;
        }
        .header-section {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 30px;
          border-radius: 10px;
          margin-bottom: 20px;
        }
        .objective-section {
          background: #e3f2fd;
          padding: 20px;
          border-radius: 10px;
          margin: 20px 0;
        }
        .component-section {
          background: white;
          border: 2px solid #e0e0e0;
          padding: 20px;
          border-radius: 10px;
          margin: 15px 0;
        }
        .cultural-section {
          background: #e8f5e9;
          padding: 20px;
          border-radius: 10px;
          margin: 20px 0;
        }
        .assessment-section {
          background: #fff9c4;
          padding: 20px;
          border-radius: 10px;
          margin: 20px 0;
        }
        ul {
          margin: 10px 0;
          padding-left: 25px;
        }
        li {
          margin: 5px 0;
        }
        .footer {
          text-align: center;
          margin-top: 40px;
          padding-top: 20px;
          border-top: 2px solid #e0e0e0;
          color: #666;
        }
      </style>
    </head>
    <body>
      <h1 style="text-align: center; color: #667eea;">4+1 Formula Dars Rejasi</h1>
      ${content}
      <div class="footer">
        <p><strong>Yaratilgan:</strong> ${new Date().toLocaleDateString('uz-UZ', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}</p>
        <p><small>4+1 Formula Platform © ${new Date().getFullYear()}</small></p>
      </div>
    </body>
    </html>
  `;

  // Use UTF-8 with BOM for proper Uzbek character encoding
  const blob = new Blob(['\uFEFF' + printContent], { type: 'text/html;charset=utf-8' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;

  // Generate filename with date
  const date = new Date().toISOString().split('T')[0];
  a.download = `dars-rejasi-${date}.html`;

  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);

  alert('Dars rejasi HTML formatda saqlandi. Brauzeringizda ochib PDF ga o\'girishingiz mumkin.');
};
