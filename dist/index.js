"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./index.html");
require("./style.css");
const pageComp_1 = require("./components/pageComp");
(0, pageComp_1.renderPage)();
fetch('http://127.0.0.1:3000/garage')
    .then((data) => data.json())
    .then(console.log);
