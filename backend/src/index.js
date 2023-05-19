const express = require("express");
const FileUpload = require("express-fileupload");
const cors = require("cors");
const ProductRoute = require("./routes/ProductRoute");

const app = express();

app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(ProductRoute);
app.use(express.static('src/public'));

app.listen(5000, ()=> console.log('Server up and Running...'));