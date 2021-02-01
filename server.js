// add express server
const express = require ("express");
// create express app
const app = express();
require('./routes/apiroutes')(app);
require('./routes/htmlroutes')(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.listen(PORT, function() {
    console.log(`Server is listening on PORT: ${PORT}`);
  });