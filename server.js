const express = require('express');
const PORT = process.env.PORT || 3001;
const path = require('path');
const app = express();
const routeHTML = require("./routes/routeHTML");
const routeAPI = require("./routes/routeAPI");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

routeHTML(app);
routeAPI(app);

app.listen(PORT, function () {
    console.log("Application listening on PORT " + PORT);
});