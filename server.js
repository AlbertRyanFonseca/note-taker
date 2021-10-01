const express = require('express');
const PORT = process.env.PORT || 3001;
const path = require('path');
const app = express();

app.listen(PORT, function () {
    console.log("Application listening on PORT" + PORT);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
