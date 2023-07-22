const express = require('express');
const ytdl = require('ytdl-core');
const cors = require('cors');
const app = express();

/* Permitir solicitudes CORS */
app.use(cors());

app.get('/', function(req, res) {
    var url = req.query.url;
    ytdl(url, {
        format: 'mp4',
        filter: 'audioandvideo',
        quality: 'highest'
    }).pipe(res);
});


app.listen(8080, function() {
    console.log('Server listening on port 8080');
});
