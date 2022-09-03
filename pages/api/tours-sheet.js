import { google } from "googleapis";
import keys from "../../google_key";

export default function handler(req, res) {
    try {
        const client = new google.auth.JWT(
            keys.client_email, null, keys.private_key, ['https://www.googleapis.com/auth/spreadsheets']
        );

        client.authorize(async function(err, tokens) {
            if (err) {
                return res.status(400).send(JSON.stringify({error: true}));
            }

            const gsapi = google.sheets({version:'v4', auth: client});
            
            const opt = {
                spreadsheetId: '1GNjfrJ2gBk18Ilv-QgUtPynNSs4AlPJm72tUJY8n3Fc',
                range: 'Sheet1!A:Z'
            };

            let data = await gsapi.spreadsheets.values.get(opt);
            return res.status(400).send(JSON.stringify({error: false, data: data.data.values}));
        });
    } catch (e) {
        return res.status(400).send(JSON.stringify({error: true, message: e.message}));
    }
}