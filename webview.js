const app = require('express')();
const http = require('http').createServer(app);

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/webview', function(req, res) {
    console.log('asdf')
    return res.render('./webview_html.html')
})

http.listen(3001, () => console.log('webview server open !!'));