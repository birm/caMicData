var app  = require('./components/Routes.js')

var port = process.env.PORT || 3001;
console.log(port)
app.listen(port, () => console.log('Listening on port ' + port))
