const http = require('http');
const fs = require('fs');
const validator = require('./eventValidator.js');

http.createServer((req, res) => {
    fs.readFile('events.json', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            let events = JSON.parse(data.toString());

            let html = `<!DOCTYPE html>
            <html>
                <head>
                    <title>Events</title>
                </head>
                <body>
                    <table border="1">
                        <tr>
                            <th>Event Name</th>
                            <th>Event Description</th>
                            <th>Event Date</th>
                            <th>Event Details</th>
                        </tr>
                        ${events.map(event => {
                            return `
                            <tr>
                                <td>${event.title}</td>
                                <td>${event.description}</td>
                                <td>${event.date}</td>
                                <td>${validator.checkDate(event.date) ? 'Event is in the date range' : 'Event is not in date range'}, ${validator.checkName(event.title) ? 'This is a valid event title' : 'This is not a valid title'} </td>
                            </tr>
                            `
                        }).join('')}
                    </table>
                </body>
            </html>`;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(html);
            res.end();
        }
    });
}).listen(8888, () => {
    console.log('Server is running on port 8888');
});

