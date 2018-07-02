var app  = require('./components/Routes.js')

var port = process.env.PORT || 3001;

app.listen(port, () => console.log('Listening on port ' + port))
