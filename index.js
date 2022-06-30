const http = require('http');
const express = require('express');
const app = express();

let notes = [
    {
        id: 1,
        content: "HTML is easy.",
        date: "2022-06-30T16:00:34:098Z",
        important: true
    },
    {
        id: 2,
        content: "The browser can excecute JavaScript.",
        date: "2022-06-30T17:00:49:123Z",
        important: false
    },
    {
        id: 3,
        content: "GET and POST are important HTTP protocol methods",
        date: "2022-06-30T18:00:17:562Z",
        important: true
    }
];

/* const app = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify(notes));
}); */

app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
});

app.get('api/notes', (request, response) => {
    response.json(notes)
});

const PORT = 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);