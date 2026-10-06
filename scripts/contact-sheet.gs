/*
  Google Apps Script for the "Say hello" form → a Google Sheet.
  Paste into the sheet's Extensions → Apps Script, deploy as a web app,
  and put the /exec URL in VITE_FORM_ENDPOINT (in .env locally and in Netlify's env vars).
*/
const SHEET_NAME = 'Messages';
const NOTIFY = true; // emails you (the sheet's owner) on every new message

function doPost(e) {
  try {
    const d = JSON.parse(e.postData.contents);
    const clean = (v, n) => String(v || '').slice(0, n).replace(/^[=+\-@]/, "'$&"); // no formula injection
    const row = [new Date(), clean(d.name, 200), clean(d.email, 200), clean(d.message, 5000), clean(d.page, 100)];
    if (!row[1] || !row[2] || !row[3]) return json({ ok: false, error: 'missing fields' });

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sh = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
    if (sh.getLastRow() === 0) sh.appendRow(['Received', 'Name', 'Email', 'Message', 'Page']);
    sh.appendRow(row);

    if (NOTIFY) MailApp.sendEmail({
      to: Session.getEffectiveUser().getEmail(),
      replyTo: row[2],
      subject: 'Hello from ' + row[1] + ' (vaanyasingh.in)',
      body: row[3] + '\n\n' + row[1] + ' · ' + row[2],
    });
    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  }
}

function json(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
