const { google } = require('googleapis');
const credentials = require('./credentials.json');

async function run() {
  // Authorize the client with the Google Sheets API using the credentials
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  const client = await auth.getClient();

  // Define the data to write to the sheet
  const data = [
    [Math.random(), Math.random(), Math.random(), Math.random()],
    [Math.random(), Math.random(), Math.random(), Math.random()],
    [Math.random(), Math.random(), Math.random(), Math.random()],
    [Math.random(), Math.random(), Math.random(), Math.random()],
  ];

  // Create the request to write the data to the sheet
  const request = {
    spreadsheetId: '1ywCRiYUUUTRF1RiwQ7XMt2-4IiQpceQTlKzOO1l_3kc',
    range: 'Orders!A1:D4',
    valueInputOption: 'USER_ENTERED',
    resource: {
      values: data,
    },
    auth: client,
  };

  // Send the request to write the data to the sheet
  const sheets = google.sheets({ version: 'v4', auth: client });
  const response = await sheets.spreadsheets.values.update(request);
  console.log(`${response.data.updatedCells} cells updated.`);
}

run().catch(console.error);