"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const express = require('express');
const bodyParser = require('body-parser');
const en = require('./en.json');
const ar = require('./ar.json');
const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 3000;
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send('it works');
}));
app.get('/strings', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const strings = { en, ar };
    res.send(strings);
}));
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
